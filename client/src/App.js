import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  { getPosts } from './services/posts';
import Home from './screens/Home/Home.jsx';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async() => {
      const resp = await getPosts();
      setPosts(resp);
      console.log(resp);
    }
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home posts={posts}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
