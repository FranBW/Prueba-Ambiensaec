<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\clientes;

class ClientesController extends Controller
{
    //
    public function get (){
        try {
            $data = clientes::get();
            return response()->json($data, 200);
        } catch (\Throwable $th) {
            return response()->json(['Error interno del servidor'=>$th -> getMessage()], 500);
        }
    }

    public function create(Request $request){
        try {
            $data['cedula'] = $request->cedula;
            $data['primer_nombre'] = $request->primer_nombre;
            $data['segundo_nombre'] = $request->segundo_nombre;
            $data['apellido_paterno'] = $request->apellido_paterno;
            $data['apellido_masterno'] = $request->apellido_masterno;
            $data['id_direccion'] = $request->id_direccion;
    
            $cliente = clientes::create($data);
    
            return response()->json(['cliente' => $cliente, 'message' => 'Cliente creado correctamente'], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
    

    public function getById($id){
        try {
            $data = clientes::find($id);
            return response()->json($data,200); 
        } catch(\Throwable $th) {
            return response()->json(['error' => $th->getMessage()],500);
        }
    }

    public function update(Request $request, $id) {
        try {
            $data = [
                'cedula' => $request->cedula,
                'primer_nombre' => $request->primer_nombre,
                'segundo_nombre' => $request->segundo_nombre,
                'apellido_paterno' => $request->apellido_paterno,
                'apellido_masterno' => $request->apellido_masterno,
                'id_direccion' => $request->id_direccion
            ];
    
            clientes::find($id)->update($data);
    
            $res = clientes::find($id);
    
            return response()->json(['message' => 'Se ha actualizado el registro con éxito.', 'cliente' => $res], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
    
    public function delete($id) {
        try {
            $cliente = clientes::findOrFail($id);
            $cliente->delete();
    
            return response()->json(['message' => 'Cliente eliminado correctamente'], 200, []);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500, []);
        }
    }
    
}                            