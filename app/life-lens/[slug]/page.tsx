import StoryReaderClient from "./StoryReaderClient";
import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import path from "path";

type PageBlock = {
  heading: string;
  body: string;
};

type StoryPage = {
  title: string;
  label: string;
  pages: PageBlock[];
};

const storyMetadata: Record<
  string,
  { title: string; label: string; fileName?: string }
> = {
  "i-dreamed-you-first": {
    title: "I Dreamed You First: A Love That Found Me",
    label: "Love Novel",
    fileName: "idreamedyoufirst.md",
  },
};

function splitTextIntoPages(text: string, maxChars = 850): string[] {
  const lines = text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const pages: string[] = [];
  let current = "";

  for (const line of lines) {
    const next = current ? `${current}\n\n${line}` : line;

    if (next.length > maxChars && current) {
      pages.push(current.trim());
      current = line;
    } else {
      current = next;
    }
  }

  if (current.trim()) {
    pages.push(current.trim());
  }

  return pages;
}

function parseMarkdownToPages(markdown: string): PageBlock[] {
  const normalized = markdown
    .replace(/\r\n/g, "\n")
    .replace(/^#{1,6}\s+/gm, "")
    .trim();

  const chapterSections = normalized.split(/(?=Chapter\s*\d+\s*[:\-]?)/gi);
  const pages: PageBlock[] = [];

  chapterSections.forEach((section) => {
    const trimmed = section.trim();
    if (!trimmed) return;

    const lines = trimmed.split("\n").map((line) => line.trim());
    const firstLine = lines[0];

    const isChapter = /^Chapter\s*\d+\s*[:\-]?/i.test(firstLine);
    const heading = isChapter ? firstLine : "I Dreamed You First";
    const body = isChapter ? lines.slice(1).join("\n").trim() : trimmed;

    const splitPages = splitTextIntoPages(body);

    splitPages.forEach((pageBody, index) => {
      pages.push({
        heading: `${heading} · ${index + 1}`,
        body: pageBody,
      });
    });
  });

  return pages;
}

async function loadStory(slug: string): Promise<StoryPage | null> {
  const metadata = storyMetadata[slug];

  if (!metadata?.fileName) return null;

  try {
    const filePath = path.join(
      process.cwd(),
      "app",
      "life-lens",
      "content",
      metadata.fileName
    );

    const raw = await readFile(filePath, "utf-8");
    const pages = parseMarkdownToPages(raw);

    return {
      title: metadata.title,
      label: metadata.label,
      pages,
    };
  } catch (error) {
    console.error("Failed to load markdown for", slug, error);
    return null;
  }
}

export default async function StoryReaderPage({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const resolvedParams = await params;

  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug;

  const story = await loadStory(slug);

  if (!story?.pages?.length) {
    notFound();
  }

  return <StoryReaderClient story={story} />;
}