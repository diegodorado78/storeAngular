import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute ,Params} from '@angular/router';
import { CustomValidators } from 'src/app/utils/validators';
import { ProductsService } from './../../../core/services/products.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

   form:any; //FormGroup;
   id:string;
  constructor(
    private formBuilder: FormBuilder, //inyeccion de dependencia
    private productsService:ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.buildForm();//form se debe crear en el constructor
  }

  ngOnInit(): void {
    //proceso para al iniciar el componente se carguen los datos del pdto en cuestion en cada field
    this.activatedRoute.params.subscribe((params:Params)=>{//me subscribo para obtener la info del producto
      this.id = params.id;// traigo el id de la ruta activa(en pdto a editar)
      this.productsService.getProduct(this.id)//llamo al servicio para obtener el pdto del modelo que coincida con de la ruta activa
      .subscribe(product=>{
        // this.form.patchValue({
        //   id:product.id,
         //  description:product.description
        //CUANDO EN EL FORM COINCIDE TODA LA INFO , PUEDO PASAR DIRECTAMENTE A product
        this.form.patchValue(product)
        // }); //uso el patch value para insertar la info ya guardad en bd del pdto  en el form
      })//me suscribo para obtener la respuesta

    })

  }
  // saveproducto se ejecuta luego de modificar los valores del form
 saveProduct(event:Event){
    event.preventDefault(); //evitar recargar pagina
    if(this.form.valid){
      const product=this.form.value;
      this.productsService.updateProduct(this.id,product)//hago un update en lugar de save
      .subscribe((newProduct)=>{
        console.log(newProduct);
        this.router.navigate(['./admin/products'])//al crear el pdto me lleva a la lista para ver ALL
      }
      )};
    console.log(this.form.value)//muestra la info enviada
  }

  //metodo llamado en el constructor para crear el formulario de editar
  private buildForm(){
    //cuando lo edito no necesito crear el id de nuevo
    this.form =this.formBuilder.group({// creamos en un json todos los form control que necesitamos
      //para hacer uso de los  validadores, los llamo y pongo el key como un array con el campo y el validador
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



}
