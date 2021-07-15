import { Link } from 'react-router-dom';
function BlogCard({post}) {
  return (
    <Link to={`/post/${post._id}`}>
      <div key={post._id}>
        <img src={post.imgURL} alt={post.title}/>
        <h3>{post.title}</h3>
      </div>
    </Link>
  )
}

export default BlogCard;