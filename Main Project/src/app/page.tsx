import Container from "@/components/Container";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:p-20 md:pb-10">
        <h1 className="text-primary dark:text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Tyler Durden
        </h1>
        <p className="text-secondary text-sm">
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as a software engineer
          at Google.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
