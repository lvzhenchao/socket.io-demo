<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
//    return view('welcome');

//    $a = Redis::set('name', 'Lzc');

    $data = [
        'event' => 'aNewMessage',
        'data'  => [
            'name' => 'Jelly'
        ]
    ];
    $test = Redis::publish('test-channel', json_encode($data));
    var_dump($test);die;

    return "Done";

//    return Redis::get('name');
});
