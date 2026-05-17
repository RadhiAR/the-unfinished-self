"use client";

import { useEffect, useState } from "react";
import styles from "./adminWeeklyTeaRequests.module.css";

type AccessRequest = {
    id?: string | null;
    first_name: string;
    last_name: string;
    location: string | null;
    contact: string | null;
    email: string;
    access_type: "read" | "write";
    status: "pending" | "approved" | "rejected";
    created_at: string;
};

export default function WeeklyTeaRequestsAdminPage() {
    const [token, setToken] = useState("");
    const [requests, setRequests] = useState<AccessRequest[]>([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function loadRequests(adminToken = token) {
        setLoading(true);
        setMessage("");

        const response = await fetch("/api/weekly-tea/access-requests", {
            headers: {
                "x-admin-token": adminToken,
            },
        });

        const result = await response.json();

        if (!response.ok) {
            setMessage(result.error || "Unable to load requests.");
            setLoading(false);
            return;
        }

        setRequests(result.requests || []);
        setLoading(false);
    }

    async function updateStatus(
        request: AccessRequest,
        status: "approved" | "rejected" | "pending"
    ) {
        setMessage("");

        const response = await fetch(
            `/api/weekly-tea/access-requests/${request.id || "by-email"}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "x-admin-token": token,
                },
                body: JSON.stringify({
                    status,
                    email: request.email,
                    accessType: request.access_type,
                }),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            setMessage(result.error || "Unable to update request.");
            return;
        }

        setRequests((currentRequests) =>
            currentRequests.map((currentRequest) =>
                currentRequest.email === request.email &&
                    currentRequest.access_type === request.access_type
                    ? { ...currentRequest, status }
                    : currentRequest
            )
        );

        setMessage(`Request ${status}.`);
    }

    useEffect(() => {
        const savedToken = window.localStorage.getItem("weeklyTeaAdminToken");

        if (savedToken) {
            setToken(savedToken);
            loadRequests(savedToken);
        }
    }, []);

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        window.localStorage.setItem("weeklyTeaAdminToken", token);
        loadRequests(token);
    }

    return (
        <main className={styles.adminPage}>
            <section className={styles.adminShell}>
                <div className={styles.header}>
                    <p className={styles.eyebrow}>The Weekly Tea</p>
                    <h1>Access Requests</h1>
                    <p>Approve or reject reader and writer access requests from here.</p>
                </div>

                <form className={styles.tokenBox} onSubmit={handleLogin}>
                    <input
                        type="password"
                        placeholder="Enter admin token"
                        value={token}
                        onChange={(event) => setToken(event.target.value)}
                        required
                    />

                    <button type="submit">
                        {loading ? "Loading..." : "Load Requests"}
                    </button>
                </form>

                {message && <p className={styles.message}>{message}</p>}

                <div className={styles.requestGrid}>
                    {requests.length === 0 && !loading && (
                        <div className={styles.emptyCard}>
                            No requests found.
                        </div>
                    )}

                    {requests.map((request) => (
                        <article
                            key={`${request.email}-${request.access_type}`}
                            className={styles.requestCard}
                        >
                            <div className={styles.cardTop}>
                                <div>
                                    <h2>
                                        {request.first_name} {request.last_name}
                                    </h2>
                                    <p>{request.email}</p>
                                </div>

                                <span
                                    className={`${styles.statusPill} ${request.status === "approved"
                                            ? styles.approved
                                            : request.status === "rejected"
                                                ? styles.rejected
                                                : styles.pending
                                        }`}
                                >
                                    {request.status}
                                </span>
                            </div>

                            <div className={styles.details}>
                                <p>
                                    <strong>Access:</strong> {request.access_type}
                                </p>

                                <p>
                                    <strong>Location:</strong>{" "}
                                    {request.location || "Not provided"}
                                </p>

                                <p>
                                    <strong>Contact:</strong>{" "}
                                    {request.contact || "Not provided"}
                                </p>

                                <p>
                                    <strong>Requested:</strong>{" "}
                                    {new Date(request.created_at).toLocaleString()}
                                </p>
                            </div>

                            <div className={styles.actions}>
                                <button
                                    type="button"
                                    className={styles.approveBtn}
                                    onClick={() => updateStatus(request, "approved")}
                                >
                                    Approve
                                </button>

                                <button
                                    type="button"
                                    className={styles.rejectBtn}
                                    onClick={() => updateStatus(request, "rejected")}
                                >
                                    Reject
                                </button>

                                <button
                                    type="button"
                                    className={styles.pendingBtn}
                                    onClick={() => updateStatus(request, "pending")}
                                >
                                    Pending
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}