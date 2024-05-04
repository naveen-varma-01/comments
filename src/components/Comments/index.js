import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', isLike: false}
  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  likedComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filterdList = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: filterdList})
  }

  render() {
    const {commentsList} = this.state
    const count = commentsList.length
    return (
      <div className="cont">
        <h1 className="heading">Comments</h1>
        <div className="main-cont">
          <div className="com-cont">
            <form className="form-cont" onSubmit={this.addComment}>
              <p className="label">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                id="text"
                onChange={this.onChangeName}
              />
              <textarea
                rows="6"
                cols="60"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              />
              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <div className="img-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <div>
          <p className="label">
            <span className="count">{count}</span> comments
          </p>
        </div>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              likedComment={this.likedComment}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
