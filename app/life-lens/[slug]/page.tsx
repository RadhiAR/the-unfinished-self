import StoryReaderClient from "./StoryReaderClient";
import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

type PageBlock = {
  heading: string;
  body: string;
};

type StoryMetadata = {
  title: string;
  label: string;
  pages?: PageBlock[];
};

type StoryPage = Omit<StoryMetadata, "pages"> & {
  pages: PageBlock[];
};

const storyMetadata: Record<string, StoryMetadata> = {
  "weekend-i-started-writing-again": {
    title: "The Weekend I Started Writing Again",
    label: "Trailer Version",
    pages: [
      {
        heading: "Before the first chapter",
        body: "There are some stories that don’t arrive loudly. They don’t knock. They don’t demand to be written. They sit quietly until one weekend, you finally notice them.",
      },
      {
        heading: "The feeling",
        body: "This story begins with a girl who is still becoming. She carries dreams like tiny lights in her pocket.",
      },
      {
        heading: "The promise",
        body: "Every weekend, another page opens. Not because the story is finished, but because she is brave enough to keep writing it.",
      },
    ],
  },
  "pink-skies-and-unsaid-things": {
    title: "Pink Skies and Unsaid Things",
    label: "Coming Soon",
    pages: [
      {
        heading: "Trailer coming soon",
        body: "This story is still being written. It will open with sunsets, quiet feelings, almost-confessions, and memories that stay longer than expected.",
      },
    ],
  },
  "girl-who-kept-becoming": {
    title: "The Girl Who Kept Becoming",
    label: "Planned",
    pages: [
      {
        heading: "Trailer coming soon",
        body: "A story about softness, ambition, love, chaos, and all the unfinished versions of a girl who kept choosing herself.",
      },
    ],
  },
  "i-dreamed-you-first": {
    title: "I Dreamed You First: A Love That Found Me",
    label: "Love Novel",
  },
  "spoiled-tea": {
    title: "Spoiled Tea",
    label: "A Novel",
    pages: [
      {
        heading: "Chapter 1: The Warmth of Quiet",
        body: "In the hush right before dawn, she poured the last of the tea into a cup and watched the steam curl like a promise. This is the place where her story begins — slow, uncertain, and tenderly honest.",
      },
      {
        heading: "Chapter 2: Pages in the Margin",
        body: "The words were written in the margins of her days, in the pauses between ordinary moments. Each line was a small rebellion, an invitation to keep going.",
      },
      {
        heading: "Chapter 3: When the World Forgot to Wait",
        body: "She learned to carry the story in her pocket, to take it out at a stoplight, a train ride, a quiet moment. The novel lived in the spaces where she was otherwise expected to be anything but herself.",
      },
      {
        heading: "Chapter 4: What You Can Add Here",
        body: "This space is yours. Add your novel content, expand the page count, and let the reader swipe through each chapter as the story unfurls.",
      },
      {
        heading: "Chapter 5: The Next Page",
        body: "Keep writing. Keep swiping. The next part of the novel opens when you decide to put one more sentence into it.",
      },
    ],
  },
};

function parseMarkdownToPages(markdown: string): PageBlock[] {
  const lines = markdown.split(/\r?\n/);
  const pages: PageBlock[] = [];
  let currentHeading = "";
  let currentBody: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Check if line starts with "Chapter X:"
    if (/^chapter\s*\d+[:\-]?/i.test(trimmed)) {
      if (currentHeading) {
        pages.push({
          heading: currentHeading,
          body: currentBody.join("\n\n"),
        });
      }
      currentHeading = trimmed;
      currentBody = [];
      continue;
    }

    if (!currentHeading) continue;

    currentBody.push(trimmed);
  }

  if (currentHeading) {
    pages.push({
      heading: currentHeading,
      body: currentBody.join("\n\n"),
    });
  }

  return pages;
}

async function loadStory(slug: string): Promise<StoryPage | null> {
  const metadata = storyMetadata[slug];
  if (!metadata) {
    return null;
  }

  if (slug === "i-dreamed-you-first") {
    try {
      const filePath = fileURLToPath(new URL(`../content/${slug}.md`, import.meta.url));
      const raw = await readFile(filePath, "utf-8");
      const pages = parseMarkdownToPages(raw);
      if (!pages.length) {
        return null;
      }
      return {
        ...metadata,
        pages,
      };
    } catch (error) {
      console.error("Failed to load markdown for", slug, error);
      return null;
    }
  }

  if (!metadata.pages) {
    return null;
  }

  return metadata as StoryPage;
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