 import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { TranslateService } from './translate.service';



@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    //TranslateService,
    {
      
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
   exports:[TranslatePipe,CommonModule] ,
   
   entryComponents:[TranslatePipe]
})
export class TranslateModule { }
export function setupTranslateFactory(
  service: TranslateService): Function {
  return () =>{
    //
    let lang="tr";
    if(localStorage.getItem("language")){
      lang=localStorage.getItem("language");
    }
    
    service.use(lang);
  } 
} 
