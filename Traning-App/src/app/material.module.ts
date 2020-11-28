import {NgModule} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    imports:[
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
        
    ],
    exports:[
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
]

})
export class MaterialModule{}