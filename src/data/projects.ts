export interface World {
  slug: "veil" | "bleach";
  title: string;
  subtitle: string;
  eyebrow: string;
  description: string;
  href: string;
  status: string;
  meta: string;
  coordinate: string;
  contents: string[];
}

export const worlds: World[] = [
  {
    slug: "veil",
    title: "Вуаль",
    subtitle: "Земля, 2435",
    eyebrow: "Авторский мир · SWADE",
    description:
      "Энциклопедия Земли 2435 — мира после Великого Пробуждения, где магия вернулась, а привычная реальность стала лишь тонкой границей.",
    href: "/games/trpg/swade/veil/",
    status: "Исследовать мир",
    meta: "Лор · Энциклопедия · Игровые материалы",
    coordinate: "V-2435 / 01",
    contents: ["Энциклопедия мира", "Справочник игрока", "Персонажи"],
  },
  {
    slug: "bleach",
    title: "Bleach",
    subtitle: "Духовные войны",
    eyebrow: "Фанатский модуль · SWADE",
    description:
      "Русскоязычный рулбук для игры во вселенной Bleach: происхождения, духовные техники, Дзанпакто, готовые персонажи и материалы ведущего.",
    href: "/games/trpg/swade/bleach/",
    status: "Открыть рулбук",
    meta: "Правила · Кампании · Бестиарий",
    coordinate: "B-SOUL / 02",
    contents: ["Player Edition", "GM Edition", "Полнотекстовый поиск"],
  },
];
