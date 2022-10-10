import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { FormCanDeactivate } from 'src/app/guards/form-guard.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, FormCanDeactivate {

  productForm!: FormGroup

  modalState = new BehaviorSubject(false)
  leavePage = new BehaviorSubject(false)

  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      product: new FormControl<string>(''),
      amount: new FormControl<number>(0)
    })
  }

  saveForm() {
    const value = this.productForm.value
    console.log(value.product, value.amount)
  }

  modalHendler(state: boolean) {
    if(state) {
      this.leavePage.next(true)
      this.modalState.next(false)
    }
  }

}
