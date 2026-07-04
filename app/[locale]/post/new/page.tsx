"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Modal } from "@/components/ui/Modal";
import { NewPostForm } from "@/components/post/NewPostForm";
import { ROUTES } from "@/lib/constants/routes";

export default function NewPostPage() {
  const t = useTranslations("Common");
  const router = useRouter();

  return (
    <Modal closeLabel={t("close")} onClose={() => router.push(ROUTES.home)}>
      <NewPostForm />
    </Modal>
  );
}
