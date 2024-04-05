import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'


const Home = () => {
  const [studentsData, setstudentsData] = useState(null)
  const api = 'http://localhost:9000/students'
  const fecthComment = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => setstudentsData(error))
  }
  useEffect(() => {
    fecthComment()
  }, [])

  return (
    <>
      <Nav />
      {/* Home
      <button onClick={fecthComment}>Click me</button> */}
      <div className="container">
      <h1 className="text-center text-secondary text-decoration-underline mt-5">CRUD OPERATION</h1>
          <Link to="/create" className='btn btn-success'>Had new +</Link>
        <div className="content d-flex justify-content-center mt-5">
          <table className="table border w-50">
            <thead>
              <tr >
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
             {
              studentsData && studentsData.map((student) => (
                <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>
                  <button className='btn btn-primary me-3'>edit</button>
                  <button className='btn btn-danger'>delete</button>
                </td>
              </tr>
              ))
             }
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home