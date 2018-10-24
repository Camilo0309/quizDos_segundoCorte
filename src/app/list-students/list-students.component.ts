import { Component, OnInit } from '@angular/core';
import {TypeEstudiantes} from '../type-estudiantes';
import {ESTUDIANTES} from '../model-estudiantes';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-list-students',
    templateUrl: './list-students.component.html',
    styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
    id_categoria:String = '';
    estudiante = ESTUDIANTES;
    selectedEstudiante = TypeEstudiantes

    constructor() { }
    ngOnInit() { }
}