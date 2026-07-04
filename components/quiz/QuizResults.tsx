import { useTranslations } from "next-intl";

type Result = { question: string; topAnswer: string; percentage: number };

export function QuizResults({ results }: { results: Result[] }) {
  const t = useTranslations("Quiz");

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-lg font-semibold text-ink">{t("resultsHeading")}</h1>

      <div className="flex flex-col gap-4">
        {results.map((result) => (
          <div key={result.question} className="flex flex-col gap-1">
            <p className="text-sm text-ink">{result.question}</p>
            <div className="h-2 w-full overflow-hidden rounded-[--radius-pill] bg-surface-muted">
              <div
                className="h-full rounded-[--radius-pill] bg-gradient-to-r from-accent-pink to-accent-orange"
                style={{ width: `${result.percentage}%` }}
              />
            </div>
            <p className="text-xs text-ink-muted">
              {result.percentage}% — {result.topAnswer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
