import { Component, HostBinding, inject, input, ElementRef, ViewEncapsulation, ContentChild, contentChild, afterRender, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  label = input.required<string>();
  private el = inject(ElementRef);

  constructor() {
    afterRender(() => {
      console.log("After Render");
    })

    afterNextRender(() => {
      console.log("After Next Render");
    })
  }

  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')


  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
