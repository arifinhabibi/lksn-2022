<?php

namespace App\Http\Controllers\API;

use App\Models\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class QuestionController extends Controller
{
    public function addQuestion(Request $request, $form_slug){

        $form = Form::where('slug', $form_slug)->with('questions')->first();

        $validation = Validator::make($request->all(), [
            'name' => 'required',
            'choice_type' => 'required',
            'choices' => 'array|string'
        ]);

        if ($validation->fails()) {
            # code...
            return response()->json([
                'message' => 'Invalid field',
                'errors' => $validation->errors()
            ], 422);
        }

        $question = Question::create([
            'form_id' => $form->id
        ]);

        return response()->json([
            'message' => 'Add question success',
            'question' => $question
        ], 200);
    }
}
