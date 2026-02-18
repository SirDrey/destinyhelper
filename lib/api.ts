export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPost = async (
  page: number,
  perPage: number,
): Promise<{ posts: Post[]; totalPosts: number }> => {
  const start = (page - 1) * perPage;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${perPage}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();

  const totalPosts = Number(res.headers.get("X-Total-Count") ?? "0", 10);

  return { posts, totalPosts };
};
