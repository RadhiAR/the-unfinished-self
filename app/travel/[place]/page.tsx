type Props = {
    params: Promise<{
        place: string;
    }>;
};

export default async function PlacePage({ params }: Props) {
    const { place } = await params;

    const placeName = place
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <>
            <main className="placePage">
                <h1>{placeName}</h1>
            </main>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
              * {
                box-sizing: border-box;
              }
  
              body {
                margin: 0;
              }
  
              .placePage {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: Georgia, "Times New Roman", serif;
                background:
                  radial-gradient(circle at 10% 20%, rgba(255, 214, 233, 0.75), transparent 35%),
                  radial-gradient(circle at 90% 20%, rgba(223, 243, 255, 0.8), transparent 35%),
                  linear-gradient(135deg, #fff0f7, #f8fbff);
              }
  
              h1 {
                margin: 0;
                font-size: clamp(52px, 8vw, 110px);
                line-height: 1;
                letter-spacing: -0.06em;
                color: #2f1d26;
              }
            `,
                }}
            />
        </>
    );
}