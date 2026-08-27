import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luzz Arquitetura | BH & SP",
  description: "Arquitetura e interiores que transformam espaços em experiências com propósito.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
