import { useState, useEffect } from 'react'
// import './PostEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getPost, updatePost } from '../../services/posts'

const PostEdit = (props) => {
  const [post, setPost] = useState({
    imgURL: '',
    text: '',
    title: '',
    author: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />
  }

  return (
    <Layout>
      <div className='post-edit'>
        <div className='image-container'>
          <img
            className='edit-post-image'
            src={post.imgURL}
            alt={post.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={post.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <textarea
            className='textarea-text'
            rows={10}
            cols={78}
            placeholder='Text'
            value={post.text}
            name='text'
            required
            onChange={handleChange}
          />
            <input
              className='input-title'
              placeholder='Title'
              value={post.title}
              name='title'
              required
              onChange={handleChange}
            />
          <input
            className='input-author'
            placeholder='Author'
            value={post.text}
            name='author'
            required
            autoFocus
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default PostEdit