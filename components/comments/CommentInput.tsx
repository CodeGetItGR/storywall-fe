"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { TextInput } from "@/components/ui/TextInput";
import { IconButton } from "@/components/ui/IconButton";
import { useAddComment } from "@/hooks/useComments";

export function CommentInput() {
  const t = useTranslations("Comments");
  const addComment = useAddComment();
  const [text, setText] = useState("");

  function handleSubmit() {
    if (!text.trim()) return;
    addComment.mutate(text.trim());
    setText("");
  }

  return (
    <div className="flex items-center gap-2 border-t border-border pt-3">
      <TextInput
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={t("placeholder")}
        onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
      />
      <IconButton aria-label={t("send")} onClick={handleSubmit} className="bg-primary text-white">
        <Send className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
