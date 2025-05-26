import type { Metadata } from "next";
import "../globals.css";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Freelancer's Portfolio",
  description:
    "A perfect portfolio website template that showcases your skills, minimaland smooth microinteractions, perfect for developers and designers",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="prose min-h-screen p-4 md:p-20 md:pb-10">
      {children}
    </Container>
  );
}
