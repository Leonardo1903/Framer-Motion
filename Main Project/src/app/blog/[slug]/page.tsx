import Container from "@/components/Container";

import { getBlogFrontmatter, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const frontmatter = await getBlogFrontmatter(params.slug);
  if (!frontmatter) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content } = blog;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:p-20 md:pb-10">
        <div className="prose">{content}</div>
      </Container>
    </div>
  );
}
