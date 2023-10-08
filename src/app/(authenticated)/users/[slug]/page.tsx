const Page = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
  
    return (
      <>
        user
        {slug}
      </>
    );
  };
  
  export default Page;
  