<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Sanctum\Sanctum;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request){

        // validator
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:5'
        ]);

        if ($validator->fails()) {
            # code...
            return response()->json([
                'message' => 'Invalid field',
                'errors' => $validator->errors()
             ], 422);
        }

        $user = Auth::attempt(['email' => request('email'), 'password' => request('password')]);

        if (!$user) {
            # code...
            return response()->json([
                'message' => 'Email or password incorrect'
            ], 401);
        }

        $token = Auth::user()->createToken('auth-sanctum')->plainTextToken;

        return response()->json([
            'message' => 'Login success',
            'user' => Auth::user(),
            'accessToken' => $token
        ], 200);

    }

    public function logout(Request $request){
        
        
        $token = $request->bearerToken();
        $model = Sanctum::$personalAccessTokenModel;
        $accessToken = $model::findToken($token);
     
        
        if($accessToken == null) {
            response()->json([
                'message' => 'Unauthenticated.'
            ], 401);
        }
        
        if ($accessToken != null) {
            # code...
            $accessToken->delete();
            Auth::logout();
            return response()->json([
                'message' => 'Logout success'
            ], 200);
        } 

       

        
    }
}
