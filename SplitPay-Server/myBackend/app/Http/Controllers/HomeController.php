<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    function index() {
        return response()->json(['message' => 'Hello World!']);
    }
}
