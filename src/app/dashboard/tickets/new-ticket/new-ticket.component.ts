import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>
  //private form = viewChild<ElementRef<HTMLFormElement>>('form');
  enteredTitle = "";
  enteredText = "";

  add = output<{ title: string; text: string; }>();

  ngOnInit() {
    console.log('On Init');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText })
    //this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }

  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form?.nativeElement);
  }
}
