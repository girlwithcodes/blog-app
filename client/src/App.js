import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  { getPosts } from './services/posts';
import Home from './screens/Home/Home.jsx';
import Posts from './screens/Posts/Posts.jsx';
import PostDetail from './screens/Post/Post';
import PostEdit from './screens/Edit/Edit';
import Postcreate from './screens/Create/Create.jsx';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchPosts = async() => {
      const resp = await getPosts();
      setPosts(resp);
    }
    fetchPosts();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home posts={posts}/>
        </Route>

        <Route path="/posts">
          <Posts posts={posts}/>
        </Route>

        <Route exact path="/create">
          <Postcreate setToggleFetch={setToggleFetch}/>
        </Route>

        <Route exact path="/post/:id">
          <PostDetail />
        </Route>

        <Route exact path="/edit/:id">
          <PostEdit/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
