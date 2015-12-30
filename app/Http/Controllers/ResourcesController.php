<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Quinzel\Resources;

class ResourcesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('role:developer,administrator');
    }

    /**
     * Index, sebagaimana pada controller lainnya, menampilkan halaman
     * pertama untuk kategori tertentu.
     *
     * @return view
     */
    public function index()
    {
        return view('resources.index',
            ['resources' => Resources::workingAreaTotal('<br/>')]);
    }

    /**
     * Perlihatkan summary (montage) untuk wilayah kerja yang ditentukan.
     *
     * @param  string $working_area_id
     * @return View
     */
    public function summaryWorkingArea($working_area_id)
    {
        $data = [];
        $data['working_area_name'] = DB::table('working_area')
            ->where('id', '=', $working_area_id)
            ->value('working_area_name');

        $data['contractor'] = DB::table('contractor_working_area as cwa')
            ->leftJoin('contractor', 'cwa.contractor_id', '=', 'contractor.id')
            ->where('cwa.working_area_id', '=', $working_area_id)
            ->value('contractor_name');

        return view('resources.summary', ['data' => $data]);
    }
}
