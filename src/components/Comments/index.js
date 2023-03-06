import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsList,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  //   const [comment, setComment] = useState({name: '', commentText: ''})
  const [commentList, setCommentList] = useState([])
  const onChangeName = event => setName(event.target.value)
  const onChangeCommentText = event => setCommentText(event.target.value)
  const onAddComment = event => {
    event.preventDefault()
    // setComment({name, commentText})
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentList(prevCommentList => [...prevCommentList, newComment])
    setName('')
    setCommentText('')
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(each => (
          <CommentItem commentDetails={each} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}
export default Comments
