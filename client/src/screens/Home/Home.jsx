import BlogCard from "../../components/BlogCard/BlogCard.jsx";

function Home({ posts }) {
  const CARDS = posts
    .reverse()
    .map((post, index) =>
      index < 8 ? (
        <BlogCard post={post}/>) : null
    );

  return (
    <div className="post-cards">
      <div className="latest">LATEST</div>
      <div className="cards">{CARDS}</div>
    </div>
  );
}

export default Home;
