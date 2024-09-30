import { Component } from '@angular/core';
import { attributes } from '../Models/class';
import { Time } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-controler-name',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-controler-name.component.html',
  styleUrl: './form-controler-name.component.css'
})
export class FormControlerNameComponent {

private cls:attributes;
        Group!:FormGroup;

  public firstName:string="";
  public secondName:string="";
  public course:string="";
  public gender:string="";
  public hobbies:string="";
  public phone:string="";
  public password!:string;
  public time!:Time;
  public dob!:Date;
  public website:string |undefined;
  public file!:File 
  public selectRange!:Range;
  constructor(private fb:FormBuilder){
    this.cls=new attributes();
  }


  submit(){
    const formvalue=this.Group.value;
    this.cls.firstName=formvalue.firstName;
    this.cls.secondName=formvalue.secondName;
    this.cls.course=formvalue.course;
    this.cls.gender=formvalue.gender ;
    this.cls.hobbies=formvalue.hobbies;
    this.cls.phone=formvalue.phone;
    this.cls.password=formvalue.password;
    this.cls.time=formvalue.time;
    this.cls.website=formvalue.website;
    this.cls.file=formvalue.file;
    this.cls.dob=formvalue.dob;
    this.cls.selectRange=formvalue.selectRange;
   



   console.log(this.cls);
  }
  

}
