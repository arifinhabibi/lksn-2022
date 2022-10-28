<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\FormController;
use App\Http\Controllers\API\QuestionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



// authentication
Route::post('/v1/auth/login', [AuthController::class, 'login']);
Route::post('/v1/auth/logout', [AuthController::class, 'logout']);


Route::group(['middleware' => ['user']], function(){
    
    // forms
    Route::post('/v1/forms', [FormController::class, 'createForm']);
    Route::get('/v1/forms', [FormController::class, 'getForm']);

    // detail form
    Route::get('/v1/forms/{form_slug}', [FormController::class, 'detailForm']);
    
    
    // question
    Route::post('/v1/forms/<form_slug>/questions', [QuestionController::class, 'addQuestion']);

    

});