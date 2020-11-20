import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder , FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  form;

  /*form = new FormGroup({ email: new FormControl(""), password: new FormControl("")});

    constructor()
    {

    }*/

  constructor(private formservice:FormBuilder) {

    this.form=formservice.group({

      email:[""],
      password:[""],
      gender:[""],
      age:[""]
    });
  }

  ngOnInit(): void {
  }

}
