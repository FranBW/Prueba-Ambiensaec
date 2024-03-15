<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class clientes extends Model
{
    use HasFactory;

    protected $table = 'clientes';

    protected $fillable = [
        'id',
        'cedula',
        'primer_nombre',
        'segundo_nombre',
        'apellido_paterno',
        'apellido_masterno',
        'id_direccion'
    ];
}
