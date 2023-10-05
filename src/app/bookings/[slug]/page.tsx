const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  return (
    <>
      booking
      {slug}
    </>
  );
};

export default Page;
