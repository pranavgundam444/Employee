import React, { useContext, useEffect, useEffectEvent } from 'react'
import Login from './components/Login/Login'
import EmployeeTasks from './components/EmployeeDashboard/EmployeeTasks'
import AdminPanel from './components/EmployeeDashboard/AdminPanel'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  const [user, setUser] = useState('')
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)  
      setLoggedInUserData(userData.data)
    }

  }, [])

  const handleLogin = (email, password) => {
      if(userData) {
        const owner = userData.admin.find((admins) => admins.email == email && admins.password == password)
        const employee = userData.employees.find((e) => e.email == email && e.password == password)
        if (owner) {
          setUser("admin")
          setLoggedInUserData(owner)
          localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin', data: owner}))
          console.log("Admin is logged in")
          
          
        }
        else if(employee) {
          setUser("employee")
          setLoggedInUserData(employee)
          localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee', data: employee}))
          console.log(`Employee ${employee.id} is logged in`)
        } else {
          alert("Invalid Credentials")
        }
        
      }
  }
  return (
    <>
        {user=="" ? <Login handleLogin={handleLogin} />: ''}
        {user == "admin" ? <AdminPanel changeUser={setUser} data={loggedInUserData} /> : (user == "employee" ? <EmployeeTasks changeUser={setUser} data={loggedInUserData} /> : '')}
    </>
  )
}

export default App