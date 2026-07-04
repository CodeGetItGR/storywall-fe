"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { TopBar } from "@/components/layout/TopBar";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResults } from "@/components/quiz/QuizResults";
import { useSubmitQuizAnswers, type QuizAnswers } from "@/hooks/useQuiz";

export default function QuizPage() {
  const t = useTranslations("Quiz");
  const tCommon = useTranslations("Common");
  const questions = t.raw("questions") as Array<{ question: string; options: string[] }>;
  const results = t.raw("results") as Array<{ question: string; topAnswer: string; percentage: number }>;
  const submitAnswers = useSubmitQuizAnswers();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentIndex];

  function handleNext() {
    if (currentIndex === questions.length - 1) {
      submitAnswers.mutate(answers);
      setIsComplete(true);
      return;
    }
    setCurrentIndex((index) => index + 1);
  }

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col bg-background">
      <TopBar title={t("navTitle")} backLabel={tCommon("back")} />
      {isComplete ? (
        <QuizResults results={results} />
      ) : (
        <QuizQuestion
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedOption={answers[currentIndex] ?? null}
          onSelectOption={(index) => setAnswers((prev) => ({ ...prev, [currentIndex]: index }))}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
