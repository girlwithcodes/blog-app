import Layout from '../../components/Layout/Layout.jsx';
import BlogCard from '../../components/BlogCard/BlogCard.jsx';

function Posts(props) {
  const posts = props.posts;
  const CARDS = posts.map((post) => {
    return (
      <BlogCard post={post} key={post._id} />
    )
  })
  return (
    <Layout>
      <div className = "posts-display">
        {CARDS}
      </div>
    </Layout>
    
  )
}

export default Posts;