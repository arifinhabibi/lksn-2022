<?php

namespace App\Http\Controllers\API;

use App\Models\Form;
use App\Models\AllowDomain;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    public function createForm(Request $request){
       
        $validation = Validator::make($request->all(), [
            'name' => 'required',
            'slug' => 'required|unique:forms|alpha_dash',
            'allowed_domains' => 'array'
        ]);

        if ($validation->fails()) {
            # code...
            return response()->json([
                'message' => 'Invalid field',
                'errors' => $validation->errors()
            ], 422);
        }


        $form = Form::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'description' => $request->description,
            'creator_id' => Auth::user()->id,
            'limit_one_response' => $request->limit_one_response == true ? 1 : 0
        ]);

        foreach ($request->allowed_domains as $allowDomain) {
            # code...
            AllowDomain::create([
                'form_id' => $form->id,
                'domain' => $allowDomain
            ]);
        }


        return response()->json([
            'form' => $form
        ], 200);

     }

     public function getForm(Request $request){
        return response()->json([
            'message' => 'Get all forms success',
            'forms' => Form::all()
        ], 200);
     }

     public function detailForm(Request $request, $form_slug){

        $form = Form::where('slug', $form_slug)->with('questions')->first();
        
        // if () {
        //     # code...
        //     return response()->json([
        //         'message' => 'Forbidden access'
        //     ], 403);
        // }
        if (!$form) {
            # code...
            return response()->json([
                'message' => 'Form not found'
            ], 404);
        }


        return response()->json([
            'message' => 'Get form success',
            'form' => $form
        ], 200);
     }


}
