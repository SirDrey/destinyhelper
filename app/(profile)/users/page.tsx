import Posts from "@/components/ui/Posts";

interface HomeProps {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: HomeProps) => {
  const resolvedSearchParams = await searchParams;
  console.log(resolvedSearchParams);
  return (
    <div>
      <Posts resolvedSearchParams={resolvedSearchParams} />
    </div>
  );
};

export default Page;
