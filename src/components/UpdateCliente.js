import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/v1/clientes/'

export const UpdateCliente = () => {
    const [cedula, setcedula] = useState('')
    const [primer_nombre, setprimer_nombre] = useState('')
    const [segundo_nombre, setsegundo_nombre] = useState('')
    const [apellido_paterno, setapellido_paterno] = useState('')
    const [apellido_masterno, setapellido_masterno] = useState('')
    const [id_direccion, setid_direccion] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    async function update(e) {
        e.preventDefault();

        try {
            await axios.put(`${endpoint}${id}`, {
                cedula: cedula, 
                primer_nombre: primer_nombre, 
                segundo_nombre: segundo_nombre,
                apellido_paterno: apellido_paterno, 
                apellido_masterno: apellido_masterno, 
                id_direccion: id_direccion
            });
            navigate('/');
        } catch (error) {
            console.error('Error al actualizar cliente:', error);
            console.log('Este es el PUT: ',endpoint+id);
            console.log('Esto es lo que mando a actualizar: ',cedula,primer_nombre,segundo_nombre, apellido_paterno,apellido_masterno,id_direccion)
        }
    }

    useEffect(() => {
        const getById = async () => {
            try {
                    const response = await axios.get(`${endpoint}${id}`);
                    setcedula(response.data.cedula);
                    setprimer_nombre(response.data.primer_nombre);
                    setsegundo_nombre(response.data.segundo_nombre);
                    setapellido_paterno(response.data.apellido_paterno);
                    setapellido_masterno(response.data.apellido_masterno);
                    setid_direccion(response.data.id_direccion);                
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
                        onChange={(e) => setcedula(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Primer Nombre</label>
                    <input
                        value={primer_nombre}
                        onChange={(e) => setprimer_nombre(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Segundo Nombre</label>
                    <input
                        value={segundo_nombre}
                        onChange={(e) => setsegundo_nombre(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Apellido Paterno</label>
                    <input
                        value={apellido_paterno}
                        onChange={(e) => setapellido_paterno(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Apellido Materno</label>
                    <input
                        value={apellido_masterno}
                        onChange={(e) => setapellido_masterno(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>ID Dirección</label>
                    <input
                        value={id_direccion}
                        onChange={(e) => setid_direccion(e.target.value)}
                        type='text'
                        className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    );
};

export default UpdateCliente;