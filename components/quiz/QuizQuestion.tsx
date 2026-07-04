"use client";

import { useTranslations } from "next-intl";
import { ProgressDots } from "@/components/ui/ProgressDots";
import { GradientButton } from "@/components/ui/GradientButton";
import { cn } from "@/lib/utils/cn";

type Question = { question: string; options: string[] };

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onNext,
}: {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  onNext: () => void;
}) {
  const t = useTranslations("Quiz");

  return (
    <div className="flex flex-col gap-4 p-4">
      {questionNumber === 1 && <p className="text-sm font-medium text-ink">{t("title")}</p>}
      <ProgressDots total={totalQuestions} current={questionNumber} />
      <p className="text-xs font-semibold uppercase text-ink-muted">
        {t("questionLabel", { current: questionNumber, total: totalQuestions })}
      </p>
      <h1 className="text-lg font-semibold text-ink">{question.question}</h1>

      <div className="flex flex-col gap-2">
        {question.options.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelectOption(index)}
            className={cn(
              "rounded-2xl border px-4 py-3 text-left text-sm",
              selectedOption === index ? "border-primary bg-surface-muted" : "border-border bg-surface",
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <GradientButton disabled={selectedOption === null} onClick={onNext}>
        {t("next")}
      </GradientButton>
    </div>
  );
}
