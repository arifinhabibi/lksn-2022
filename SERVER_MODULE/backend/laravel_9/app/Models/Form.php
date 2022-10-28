<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;
    protected $table = 'forms';

    protected $guarded = [];
    public $timestamps = false;

    public function allowDomain(){
        return $this->hasMany(AllowDomain::class);
    }

    public function questions(){
        return $this->hasMany(Question::class);
    }
}
