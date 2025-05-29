import { getAllBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

export default async function Blogs() {
  const allBlogs = await getAllBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div>
      <p className="text-secondary mb-12 max-w-lg pt-4 text-sm">
        I love writing things down
      </p>

      <div>
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
    </div>
  );
}
