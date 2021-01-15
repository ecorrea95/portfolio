import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactService } from '../contact.service';

import { Feedback } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;

  // feedbackForm: FormGroup;
  FormData: FormGroup;
  feedback: Feedback;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'email': '',
    'message': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 3 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 3 characters long.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email must be valid.'
    },
    'message': {
      'required':      'Message is required.',
    },
  };

  constructor(private fb: FormBuilder, private contact: ContactService, private builder: FormBuilder) {
    // this.createForm();
   }

  ngOnInit() {
    this.FormData = this.builder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)] ],
      lastname: ['', [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, Validators.email] ],
      message: ['', Validators.required ]
    })
  }

  // createForm(): void {
  //   this.feedbackForm = this.fb.group({
  //     firstname: ['', [Validators.required, Validators.minLength(3)] ],
  //     lastname: ['', [Validators.required, Validators.minLength(3)] ],
  //     email: ['', [Validators.required, Validators.email] ],
  //     message: ['', Validators.required ]
  //   });
  //   this.feedbackForm.valueChanges
  //   .subscribe(data => this.onValueChanged(data));
  //   this.onValueChanged(); //reset validation messages now
  // }

  // onValueChanged(data?: any) {
  //   if (!this.feedbackForm) { return; }
  //   const form = this.feedbackForm;
  //   for (const field in this.formErrors) {
  //     if (this.formErrors.hasOwnProperty(field)) {
  //       // clear previous error message (if any)
  //       this.formErrors[field] = '';
  //       const control = form.get(field);
  //       if (control && control.dirty && !control.valid) {
  //         const messages = this.validationMessages[field];
  //         for (const key in control.errors) {
  //           if (control.errors.hasOwnProperty(key)) {
  //             this.formErrors[field] += messages[key] + ' ';
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  // onSubmit() {
  //   this.feedback = this.feedbackForm.value;
  //   console.log(this.feedback);
  //   this.feedbackForm.reset({
  //     firstname: '',
  //     lastname: '',
  //     email: '',
  //     message: ''
  //   });
  //   this.feedbackFormDirective.resetForm();
  // }

  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
      console.log(response)
    }, error => {
      console.warn(error.responseText)
      console.log({error})
    })
  }

}