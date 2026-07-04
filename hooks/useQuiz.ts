import { useMutation } from "@tanstack/react-query";

export type QuizAnswers = Record<number, number>;

export function useSubmitQuizAnswers() {
  return useMutation({
    mutationFn: (answers: QuizAnswers) => Promise.resolve(answers),
  });
}
