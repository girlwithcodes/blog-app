import { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { createPost } from "../../services/posts";
import "./Create.css";

const Postcreate = (props) => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    content: "",
    author: "",
    //TODO match edit order
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handSubmit = async (e) => {
    e.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
    props.setToggleFetch((curr) => !curr);
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div className="form-outer-container">
        <div className="form-inner-container">
          <form onSubmit={handSubmit}>
          <div className="input-wrap">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            autoFocus
            onChange={handleChange}
          />
            </div>
            <div className="input-wrap">
          <label htmlFor="imgURL">Image: </label>
          <input
            type="url"
            name="imgURL"
            id="imgURL"
            placeholder="URL"
            required
            onChange={handleChange}
          />
          </div>
          <div className="input-wrap">
          <label htmlFor="content">Content: </label>
          <textarea
            type="text"
            name="content"
            id="content"
            required
            onChange={handleChange}
          />
          </div>
          <div className="input-wrap">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            id="author"
            required
            onChange={handleChange}
          />
          </div>
          <div className="input-wrap form-button-center">
          <button id="form-button" type="submit">Post It!</button>
          </div>
        </form>
        </div>
      </div>
    </Layout>
  );
};

export default Postcreate;
