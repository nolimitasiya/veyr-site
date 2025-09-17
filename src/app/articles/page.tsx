// app/articles/page.tsx
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";

function TitleWithHighlight({ text }: { text: string }) {
  // wrap every occurrence of "before" (case-insensitive)
  const parts = text.split(/(before)/i);
  return (
    <h1 className="text-center text-3xl md:text-5xl font-bold leading-tight">
      {parts.map((p, i) =>
        p.toLowerCase() === "before" ? (
          <span key={i} className="bg-yellow-200 px-2 rounded-sm text-black">
            Before
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </h1>
  );
}

export default function SingleArticle() {
  const post = ARTICLES[0];

  return (
    <main className="px-6 md:px-20 py-12">
      <article className="max-w-3xl mx-auto">
        {/* Center the meta line too */}
        <div className="text-sm text-gray-500 mb-3 text-center">
          {new Date(post.date).toLocaleDateString()} • {post.readTime}
        </div>

        <TitleWithHighlight text={post.title} />

        {post.tags?.length ? (
          <div className="mt-4 flex gap-2 flex-wrap justify-center">
            {post.tags.map((t) => (
              <span key={t} className="text-xs bg-gray-100 rounded-full px-2 py-1">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-8 space-y-8 text-gray-800 leading-relaxed">
          {post.sections.map((s, i) => (
            <section key={i}>
              {s.heading && (
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-center md:text-left">
                  {s.heading}
                </h2>
              )}
              {s.body.map((p, j) => (
                <p key={j} className="mb-4">{p}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
