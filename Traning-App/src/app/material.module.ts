import {NgModule} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
    imports:[
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports:[MatSliderModule,
    MatFormFieldModule,
    MatInputModule,]

})
export class MaterialModule{}