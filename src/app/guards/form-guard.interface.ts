import { FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

export interface FormCanDeactivate {
    productForm: FormGroup;
    modalState: BehaviorSubject<boolean>;
    leavePage: BehaviorSubject<boolean>;
}