import {
    Component
} from '@angular/core';
import {
    BaseMatTableComponent,
    matProviders
} from "@magic-xpa/angular-material-core";
@Component({
    selector: 'mga-ToDoList',
    providers: [...matProviders],
    styleUrls: ['./ToDoList.component.css'],
    templateUrl: './ToDoList.component.html'
}) export class ToDoList extends BaseMatTableComponent {
    displayedColumns = ['Column1048578',
        'Column1048579',
        'Column1048580',
    ];
}