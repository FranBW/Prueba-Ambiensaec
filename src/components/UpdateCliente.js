import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/v1/clientes/'

export const UpdateCliente = () => {
    const [cedula, setCedula] = useState(0)
    const [primerNombre, setPrimerNombre] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [apellidoPaterno, setApellidoPaterno] = useState('')
    const [apellidoMaterno, setApellidoMaterno] = useState('')
    const [direccionId, setDireccionId] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    async function update(e) {
        e.preventDefault();

        try {
            await axios.put(`${endpoint}${id}`, {
                cedula: cedula, 
                primerNombre: primerNombre, 
                segundoNombre: segundoNombre,
                apellidoPaterno: apellidoPaterno, 
                apellidoMaterno: apellidoMaterno, 
                direccionId: direccionId});
            navigate('/');
        } catch (error) {
            console.error('Error al actualizar cliente:', error);
            console.log('Este es el PUT: ',endpoint+id);
            console.log('Esto es lo que mando a actualizar: ',cedula,primerNombre,segundoNombre, apellidoPaterno,apellidoMaterno,direccionId)
        }
    }

    useEffect(() => {
        const getById = async () => {
            try {
                    const response = await axios.get(`${endpoint}${id}`);
                    setCedula(response.data.cedula);
                    setPrimerNombre(response.data.primerNombre);
                    setSegundoNombre(response.data.segundoNombre);
                    setApellidoPaterno(response.data.apellidoPaterno);
                    setApellidoMaterno(response.data.apellidoMaterno);
                    setDireccionId(response.data.direccionId);                
            } catch (error) {
                console.error('Error al obtener cliente por ID:', error);
                console.error('Este es el ID:', id);
            }
        };
        getById();
    }, [id]);

    return (
        <div>
            <h3>Actualizar Cliente</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Cedula</label>
                    <input
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Primer Nombre</label>
                    <input
                        value={primerNombre}
                        onChange={(e) => setPrimerNombre(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Segundo Nombre</label>
                    <input
                        value={segundoNombre}
                        onChange={(e) => setSegundoNombre(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Apellido Paterno</label>
                    <input
                        value={apellidoPaterno}
                        onChange={(e) => setApellidoPaterno(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Apellido Materno</label>
                    <input
                        value={apellidoMaterno}
                        onChange={(e) => setApellidoMaterno(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>ID Dirección</label>
                    <input
                        value={direccionId}
                        onChange={(e) => setDireccionId(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    );
};

export default UpdateCliente;