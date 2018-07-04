import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-TodoListHadWeb',
    providers: [...magicProviders],
    styleUrls: ['./TodoListHadWeb.component.css'],
    templateUrl: './TodoListHadWeb.component.html'
}) export class TodoListHadWeb extends TaskBaseMagicComponent {}