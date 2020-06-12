import React from 'react'

const User = props => {
  return (
    <li>
      <p>Name: {props.user.name}</p>
      <p>Email: {props.user.email}</p>
      <p>Username: {props.user.username}</p>
    </li>
  )
}

export default User
