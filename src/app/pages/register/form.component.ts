import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NewsService } from '../../providers/news.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  public formRegister!: FormGroup;
  public formSubmitted!: Boolean;
  public listPrograms!:any;
  constructor(private fb: FormBuilder,private newsService:NewsService) { }

  ngOnInit(): void {
    this.createForm();
    this.loadPrograms();
  }
  createForm(){
    return this.formRegister = this.fb.group({
      name: ['', [Validators.required]],
      family_name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', [Validators.required,Validators.max(9999999999)]],
      program: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }
  loadPrograms(){
    this.newsService.getPrograms().subscribe((data:any)=>{
      this.listPrograms = data;
      
    })
  }
  sendFormRegister(){
    this.formSubmitted = true;
    if (this.formRegister.invalid) {
      return;
    }
    this.newsService.saveForm(this.formRegister.value).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.message){
        Swal.fire(
          'Enviado',
          `Formulario enviado con exito.`,
          'success'
        );
      }
    })


  }
  alphaNumberOnly (e:any) {  // Accept only alpha numerics, not special characters 
    var regex = new RegExp("^[a-zA-Z ]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }

    e.preventDefault();
    return false;
  }
}
