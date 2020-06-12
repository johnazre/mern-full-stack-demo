import React from 'react'

class AddUserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      username: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:8000/users/', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(createdUser => {
        console.log('user', createdUser)
        this.props.addUser(createdUser)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          Name:{' '}
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </p>
        <p>
          Email:{' '}
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </p>
        <p>
          Username:{' '}
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    )
  }
}

export default AddUserForm
