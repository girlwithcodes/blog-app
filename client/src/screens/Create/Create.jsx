import { useState } from "react";
import {  } from "react-router-dom";

const Postcreate = (props) => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    content: "",
    author: "",
  });

  // const [isCreate, setCreated] = useState(false)

  const handleChange = (e) => {
    const {name, value } = e.target
    setPost({
      ...post,
      [name]:value
    })
  }

  return (
    <form>
      <label htmlFor="title">Title: </label>
      <input type="text" name="tile" id="title" required autoFocus onChange={handleChange} />
      <label htmlFor="imgURL">Image: </label>
      <input type="url" name="imgURL" id="imgURL" placeholder="URL" required onChange={handleChange} />
      <label htmlFor="content">Content: </label>
      <textarea type="text" name="content" id="content" required onChange={handleChange}/>
      <label htmlFor="author">Author: </label>
      <input type="text" name="author" id="author" required onChange={handleChange}/>
      <button type="submit">Post It!</button>
    </form>
  );
};

export default Postcreate