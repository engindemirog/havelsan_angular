import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[hvlngTableOrder]'
})
export class TableOrderDirective implements OnInit {

  @Input() columns:number;
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { 

  }

  ngOnInit(): void {
    this.addSortRows();
    
  }

  addSortRows() {
    let trElement = this.renderer.createElement('tr');
    let i: number = 0;
    for (i = 0; i < this.columns; i++) {
      let tdElement = this.renderer.createElement('td');
      let textElement = this.renderer.createText('Sırala');
      let spanElement = this.renderer.createElement('span');
      this.renderer.appendChild(spanElement, textElement);
      this.renderer.appendChild(tdElement, spanElement);
      this.renderer.appendChild(trElement, tdElement);
    }

    let h3Element = this.renderer.createElement('tr');
    let textElement = this.renderer.createText('Sadece 50000 ürün listelendi');
    this.renderer.appendChild(h3Element,textElement);

    this.renderer.appendChild(this.elementRef.nativeElement,h3Element)
    this.renderer.insertBefore(this.elementRef.nativeElement, trElement, this.elementRef.nativeElement.firstChild);
  }

}
