import React from 'react';

// Create button to be reuseable across multiple components
const Button = props => (
  // <button className={`btn ${props.btnClass}`} data-vote={props.btnVote} onClick={props.handleClick}>
  //   {props.needsIcon ? <i data-vote={props.btnVote} className={`fa fa-thumbs-${props.btnVote}`} aria-hidden="true"></i> : props.children}
  // </button>
  <button className={`btn ${props.btnClass}`}  onClick={props.handleClick}>
  {props.needsIcon ? <i data-vote={props.btnVote} className={`fa fa-heart-o`} aria-hidden="true"></i> : props.children}
</button>
)

export default Button;