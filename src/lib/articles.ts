// lib/articles.ts
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags?: string[];
  sections: { heading?: string; body: string[] }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "detect-relay-and-rf-jamming",
    title: "Detect relay attacks & RF jamming before losses happen",
    excerpt:
      "Car theft is increasingly electronic. Understanding relay attacks and RF jamming—and detecting them fast—prevents disruption and loss.",
    date: "2025-09-15",
    readTime: "4 min read",
    tags: ["Security", "Telematics", "RF"],
    sections: [
      { body: [
        "Car theft is evolving. Criminals now use silent, electronic methods that target keyless entry and communications rather than windows and locks.",
        "Early detection is the difference between a scare and a loss. Here’s what’s happening—and what to watch for."
      ]},
      { heading: "The rising threat: by the numbers", body: [
        "📌 In England & Wales there were 732,000 vehicle-related theft incidents in the year to Sept 2024",
        "📌 2 in 5 thefts (40%) involve electronic devices (e.g., keyless repeaters/signal jammers)."
      ]},
      { heading: "How relay attacks work", body: [
        "A relay team amplifies the signal from your key fob so the vehicle thinks the key is nearby. The car unlocks and starts.",
        "Early signals: elevated RF in the key band near entry points, clustered unlock retries, after-hours ECUs waking/sleeping, and momentary lock/door state flips with no valid key events."
      ]},
      
      { heading: "Where VEYR fits", body: [
        "We continuously observe the RF environment and vehicle state to surface early, actionable signals. Thresholds are curated per site to reduce noise while catching genuine threats.",
        "You get concise alerts (not logs) so teams can intervene fast."
      ]},
    ],
  },
];
