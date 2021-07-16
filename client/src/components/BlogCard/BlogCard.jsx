import { Link } from 'react-router-dom';
import './BlogCard.css';
function BlogCard({post}) {
  return (
    <Link to={`/post/${post._id}`}>
      <div key={post._id} className="blog-card">
        <div className="blog-card-image-div">
          <img src={post.imgURL} alt={post.title} className="blog-card-image"/>
        </div>
        <div className="blog-card-info">
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-author">-{post.author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard;