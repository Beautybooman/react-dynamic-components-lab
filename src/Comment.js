import React, { Component } from 'react'

    // export default class BlogPost extends Component {
class Comment extends Component {
    render (){
     
        return (
        <div className="comment"> 
        <p>{this.props.commentText} </p>
    

         </div>

    )
}
}

export default Comment

