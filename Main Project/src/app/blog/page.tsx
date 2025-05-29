import Container from "@/components/Container";
import { getAllBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

export const metadata = {
  title: "All Blogs",
  description: "A collection of all my blogs and articles.",
};

export default async function AllBlogs() {
  const allBlogs = await getAllBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:p-20 md:pb-10">
        <h1 className="text-primary dark:text-primary text-2xl font-bold tracking-tight md:text-4xl">
          All Blogs
        </h1>
        <p className="text-secondary text-sm">
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as a software engineer
          at Google.
        </p>
        <div className="flex flex-col gap-4 py-10">
          {allBlogs.map((blog, idx) => (
            <Link href={`/blog/${blog.slug}`} key={idx}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm">
                  {new Date(blog.date ?? "").toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
