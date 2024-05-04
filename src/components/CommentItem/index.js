// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, likedComment, deleteComment} = props
  const {id, name, comment, isLike} = commentDetails

  const likeImg = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const liked = () => {
    likedComment(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  const date = formatDistanceToNow(new Date())

  return (
    <li className="list-cont">
      <p className="name">{name}</p>
      <p className="comment">{comment}</p>
      <button type="button" onClick={liked} className="btns">
        <img src={likeImg} className="icon" alt="like" />
      </button>
      <p>{date}</p>
      <button
        type="button"
        onClick={onDelete}
        className="btns"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          className="icon"
        />
      </button>
    </li>
  )
}
export default CommentItem
