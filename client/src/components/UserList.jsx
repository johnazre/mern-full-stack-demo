import React from 'react'
import User from './User.jsx'

const UserList = props => {
  const listOfUsers = props.users.map(user => (
    <User key={user._id} user={user} />
  ))

  return <ul>{listOfUsers}</ul>
}

export default UserList
