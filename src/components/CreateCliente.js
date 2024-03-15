import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/v1/clientes/'

const CreateCliente = () => {
    const [cedula, setcedula] = useState(0)
    const [primer_nombre, setprimer_nombre] = useState('')
    const [segundo_nombre, setsegundo_nombre] = useState('')
    const [apellido_paterno, setapellido_paterno] = useState('')
    const [apellido_masterno, setapellido_masterno] = useState('')
    const [id_direccion, setid_direccion] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {cedula: cedula, primer_nombre: primer_nombre, segundo_nombre: segundo_nombre,apellido_paterno: apellido_paterno, apellido_masterno: apellido_masterno, id_direccion: id_direccion})
        navigate('/')
    }
    
  return (
    <div>
        <h3>Create Product</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>cedula</label>
                <input 
                    value={cedula}
                    onChange={ (e)=> setcedula(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>primer_nombre</label>
                <input 
                    value={primer_nombre}
                    onChange={ (e)=> setprimer_nombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>segundo_nombre</label>
                <input 
                    value={segundo_nombre}
                    onChange={ (e)=> setsegundo_nombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>apellido_paterno</label>
                <input 
                    value={apellido_paterno}
                    onChange={ (e)=> setapellido_paterno(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>apellido_materno</label>
                <input 
                    value={apellido_masterno}
                    onChange={ (e)=> setapellido_masterno(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>id_direccion</label>
                <input 
                    value={id_direccion}
                    onChange={ (e)=> setid_direccion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Ingresar Cliente Nuevo</button>
        </form>
    </div>
  )
}

export default CreateCliente