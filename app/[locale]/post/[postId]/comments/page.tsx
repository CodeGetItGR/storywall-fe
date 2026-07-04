"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Modal } from "@/components/ui/Modal";
import { CommentsList } from "@/components/comments/CommentsList";
import { CommentInput } from "@/components/comments/CommentInput";
import { useComments } from "@/hooks/useComments";
import { ROUTES } from "@/lib/constants/routes";

export default function CommentsPage() {
  const t = useTranslations("Comments");
  const tCommon = useTranslations("Common");
  const router = useRouter();
  const { data: comments = [] } = useComments();
  const copy = t.raw("items") as Array<{ author: string; timeAgo: string; text: string }>;

  return (
    <Modal closeLabel={tCommon("close")} onClose={() => router.push(ROUTES.home)}>
      <div className="flex h-[70vh] flex-col p-4">
        <h1 className="text-base font-semibold text-ink">{t("title")}</h1>
        <CommentsList comments={comments} copy={copy} />
        <CommentInput />
      </div>
    </Modal>
  );
}
