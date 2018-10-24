import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-registration-student',
    templateUrl: './registration-student.component.html',
    styleUrls: ['./registration-student.component.css']
})
export class RegistrationStudentComponent implements OnInit {

    @Input() nombre:String='';
    @Input() apellido:String='';
    @Input() profesion:String='';

    constructor() { }
    ngOnInit() { }
}