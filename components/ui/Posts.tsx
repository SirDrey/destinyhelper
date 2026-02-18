import { PaginationwithLinks } from "./PaginationwithLinks";
import PostsLists from "./PostsLists";
import { fetchPost } from "@/lib/api";

interface PostsProps {
  resolvedSearchParams: { [key: string]: string | undefined };
}

const Posts = async ({ resolvedSearchParams }: PostsProps) => {
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const postsPerPage = Number(resolvedSearchParams.pageSize) || 5;

  const { posts, totalPosts } = await fetchPost(currentPage, postsPerPage);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <PostsLists posts={posts} />
      <div>
        <PaginationwithLinks
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={postsPerPage}
        />
      </div>
    </div>
  );
};

export default Posts;
