import { useState } from 'react'
import './App.css'
import ListCourse from './components/ListCourse'
import Calculation from './components/Calculation'
import Userlnfo from './components/Userlnfo'
import ColorBox from './components/ColorBox'
import UserList from './components/UserList'
import TodoListIndex from './components/TodoListIndex'
import CardUser from './Session4/CardUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ListCourse/> */}
      {/* <Calculation /> */}
      {/* <Userlnfo /> */}
      {/* <ColorBox /> */}
      {/* <UserList /> */}
      {/* <TodoListIndex /> */}
      
      <div>
        <h1>Danh sách người dùng</h1>
      </div>
      <CardUser />

    </>
  )
}

export default App
