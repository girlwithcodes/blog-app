import { Link } from "react-router-dom"
import "./Nav.css"
function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/create">Create</Link>
    </nav>
  )
}

export default Nav;