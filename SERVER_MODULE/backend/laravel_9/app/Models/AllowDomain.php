<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AllowDomain extends Model
{
    use HasFactory;
    protected $table = 'allowed_domains';
    
    protected $guarded = [];
    public $timestamps = false;

}
