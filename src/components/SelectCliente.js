import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/v1'

const SelectCliente = () => {
  const [ clientes, setclientes ] = useState( [] )

  useEffect ( ()=> {
      getAllClientes()
  }, [])

  const getAllClientes = async () => {
    const response = await axios.get(`${endpoint}/clientes/`)
    setclientes(response.data)
    //console.log(response.data)
  }

  const deleteCliente = async (id) => {
    await axios.delete(`${endpoint}/clientes/${id}`)
    getAllClientes()
  }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>cedula</th>
                    <th>primer_nombre</th>
                    <th>segundo_nombre</th>
                    <th>apellido_paterno</th>
                    <th>apellido_materno</th>
                    <th>id_direccion</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { clientes.map( (cliente) => (
                    <tr key={cliente.id}>
                        <td> {cliente.cedula} </td>    
                        <td> {cliente.primer_nombre} </td>    
                        <td> {cliente.segundo_nombre} </td>
                        <td> {cliente.apellido_paterno} </td>    
                        <td> {cliente.apellido_masterno} </td>    
                        <td> {cliente.id_direccion} </td>     
                        <td>
                            <Link to={`http://localhost:3000/update/${cliente.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deleteCliente(cliente.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default SelectCliente
