import { Component, OnInit } from '@angular/core';
import {TypeEstudiantes} from '../type-estudiantes';
import {ESTUDIANTES} from '../model-estudiantes';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-student',
    templateUrl: './detail-student.component.html',
    styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
    id_estudiante: String = '';
    estudiante = ESTUDIANTES;

    constructor(private route:ActivatedRoute) {        
        this.id_estudiante = this.route.snapshot.params['id'];
    }

    ngOnInit() { }
}