import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { CustomValidators } from 'src/app/utils/validators';
import { ProductsService } from './../../../core/services/products.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
//form builder ext de angular que sirve para crear rapi el form group(inyeccion)

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form:any //FormGroup;
  image$:Observable<any>;
  constructor(
    private formBuilder: FormBuilder, //inyeccion de dependencia
    private productsService:ProductsService,
    private router: Router,
    private  angularFireStorage:AngularFireStorage
    ) {
    this.buildForm();//form se debe crear en el constructor
  }

  ngOnInit(): void {
  }
 saveProduct(event:Event){
    event.preventDefault(); //evitar recargar pagina
    if(this.form.valid){
      const product=this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct)=>{
        console.log(newProduct);
        this.router.navigate(['./admin/products'])//al crear el pdto me lleva a la lista para ver ALL
      }
      )};
    console.log(this.form.value)//muestra la info enviada
  }
  private buildForm(){
    this.form =this.formBuilder.group({// creamos en un json todos los form control que necesitamos
      //para hacer uso de los  validadores, los llamo y pongo el key como un array con el campo y el validador
      id:['',Validators.required],
      title:['',Validators.required],
      //pongo el validador personal al lado de los de angular dentro de un array
      price:[0,[Validators.required,CustomValidators.isPriceValid]],
      image:[''],
      description:['',Validators.required]

    });
  }
  //metodo  nativo GET de TS para evitar usar form.get('price')
  get priceField(){
 return this.form.get('price')
  }
//ANGULAR FIRE STORAGE PARA SUBIR ARCHIVOS
  uploadFile(event){
  const file = event.target.files[0]; //me recupera el file y me lo guarda en un array
  const imageFile = 'imageFile'; //nombre como se va a guardar la imagen
  const fileRef = this.angularFireStorage.ref(imageFile); // creo la carpeta
  const task = this.angularFireStorage.upload(imageFile,file);//tarea que sube el archico en la dir definida
  task.snapshotChanges()// el task es un observable, snap permite saber el estado de la carga
  .pipe(
    finalize(()=>{
     this.image$= fileRef.getDownloadURL() //es un pipe que devuelve la url donde se guardo el archivo
     this.image$.subscribe(url=>{
     this.form.get('image').setValue(url)//settear la imagen en firebase
    console.log(url)
    });
    })
    )
  .subscribe();//debo hacer subscribcion para que todo se procese
  console.log(file)

}

}
