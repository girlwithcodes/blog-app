import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <nav className="nav">
      <div className="title">
        <Link to="/"  id="the-blog">
          The Blog
        </Link>
      </div>
      <div className = "posts-and-create">
        <Link to="/posts"  id="posts">
          Posts
        </Link>
        <Link to="/create"  id="create">
          Create
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
