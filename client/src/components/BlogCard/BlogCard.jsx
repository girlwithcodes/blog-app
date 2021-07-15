function BlogCard({post}) {
  return (
    <div key={post._id}>
      <img src={post.imgURL} alt={post.title}/>
      <h3>{post.title}</h3>
    </div>
  )
}

export default BlogCard;