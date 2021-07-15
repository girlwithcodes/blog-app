function BlogCard({post}) {
  return (
    <div>
      <img src={post.imgURL}/>
      <h3>{post.title}</h3>
    </div>
  )
}

export default BlogCard;