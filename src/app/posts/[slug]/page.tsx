const Page = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug
  
    return (
      <>
      post
      {slug}
      </>
    )
  }
  
  export default Page
  