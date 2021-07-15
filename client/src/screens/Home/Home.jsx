import BlogCard from "../../components/BlogCard/BlogCard.jsx";
import Layout from "../../components/Layout/Layout.jsx";

function Home({ posts }) {
  const CARDS = posts
    .reverse()
    .map((post, index) => (index < 8 ? <BlogCard post={post} key={post._id} /> : null));

  return (
    <Layout>
      <div className="post-cards">
        <div className="latest">LATEST</div>
        <div className="cards">{CARDS}</div>
      </div>
    </Layout>
  );
}

export default Home;
