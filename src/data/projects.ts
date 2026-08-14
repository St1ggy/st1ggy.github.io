export interface Project {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  status: string;
  meta: string;
}

export const projects: Project[] = [
  {
    title: "Вуаль",
    eyebrow: "Мир для НРИ",
    description:
      "Энциклопедия Земли 2435 — мира после Великого Пробуждения, где магия вернулась, а привычная реальность стала лишь тонкой границей.",
    href: "/games/trpg/swade/veil/",
    status: "Открыть проект",
    meta: "Лор · Энциклопедия · НРИ",
  },
];
