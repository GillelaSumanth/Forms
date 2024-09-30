import { Time } from "@angular/common";

export class attributes{
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
}