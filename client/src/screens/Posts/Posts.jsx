import Layout from "../../components/Layout/Layout.jsx";
import BlogCard from "../../components/BlogCard/BlogCard.jsx";
import "./Posts.css";

function Posts(props) {
  const posts = props.posts;
  const CARDS = posts.map((post) => {
    return <BlogCard post={post} key={post._id} />;
  });
  return (
    <Layout>
      <div className="posts-display">
        <div className="posts-title">All Posts:</div>
        {CARDS}
      </div>
    </Layout>
  );
}

export default Posts;
