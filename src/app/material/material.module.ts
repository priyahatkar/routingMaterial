import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const materialModArr = [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
]
@NgModule({
    declarations : [],
    imports : [CommonModule, ...materialModArr],
    exports : [...materialModArr]
})
export class MaterialModule {}