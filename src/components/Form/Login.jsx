import {useContext, useState} from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import {UserContext} from "../User/UserContext.jsx";

export default function Login() {
  const [userEntered, setUserEntered] = useState({username: "", password: ""});
  const {setCurrentUser} = useContext(UserContext)

  const navigate = useNavigate()

  function handleUserChange(event) {
    const {name, value} = event.target
    setUserEntered((prevUser) => ({...prevUser, [name]: value}))
  }

  /*function handleSubmit(event) {
    event.preventDefault()
    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')
    if (user.username === storedUsername && user.password === storedPassword) {
      alert('Login successful')
      navigate('/')
    } else {
      alert('Invalid username or password')
    }
  }*/

  function handleSubmit(event) {
    event.preventDefault()
    axios.get('http://localhost:3000/users').then(response => {
      const users = response.data
      const userExists = users.find(user => user.username === userEntered.username && user.password === userEntered.password)
      if (userExists) {
        // console.log(userExists)
        alert('Login successful')
        setCurrentUser(userExists)
        localStorage.setItem('currentUser', JSON.stringify(userExists))
        navigate('/')  // navigate to the home page
      } else {
        alert('Invalid username or password')
      }
    })
        .catch(error => {
          console.error("Error fetching users: ", error)
        })
  }

  return (
      <div className="container col-4">
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input value={userEntered.username} type="text" name={'username'} onChange={handleUserChange}
                   className="form-control" id="username"/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input value={userEntered.password} type="password" name={'password'} onChange={handleUserChange}
                   className="form-control" id="password"/>
          </div>
          <button type={'submit'} className="btn btn-primary text-dark">Submit</button>

        </form>
      </div>
  )
}