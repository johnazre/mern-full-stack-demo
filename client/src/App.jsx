import React from 'react'
import AddUserForm from './components/AddUserForm.jsx'
import UserList from './components/UserList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
    }

    this.addUser = this.addUser.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  addUser(user) {
    this.setState({
      users: [...this.state.users, user],
    })
  }

  render() {
    return (
      <div>
        <AddUserForm addUser={this.addUser} />
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default App
