import "./globals.css";
import type { Metadata } from "next";
import Content from "./patterns/Content";
import Menu from "./patterns/Menu";
import Header from "./patterns/Header";
import Aside from "./patterns/Aside";

export const metadata: Metadata = {
  title: "Next + tailwindCSS",
  description: "Um projeto para treinar minhas habilidades com o tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="container">
        <Aside />
        <Header />
        <Menu />
        <Content>{children}</Content>
      </body>
    </html>
  );
}
