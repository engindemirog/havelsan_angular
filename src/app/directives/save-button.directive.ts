import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[hvlngSaveButton]'
})
export class SaveButtonDirective implements OnInit {

  @Input() defaultColor:string;
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { 

  }
  ngOnInit(): void {
    if(this.defaultColor){
      this.setButton(this.defaultColor);
    }
  }

  setButton(color){
    this.renderer.removeClass(this.elementRef.nativeElement,"btn");
    this.renderer.removeClass(this.elementRef.nativeElement,"btn-xs");
    this.renderer.removeClass(this.elementRef.nativeElement,"btn-danger");
    this.renderer.removeClass(this.elementRef.nativeElement,"btn-success");
    this.renderer.removeClass(this.elementRef.nativeElement,"btn-primary");
    this.renderer.addClass(this.elementRef.nativeElement,color);

  }

  @HostListener("mouseenter") onMouseEnter(){

    this.setButton("btn");
    this.setButton("btn-xs");
    this.setButton("btn-success");
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.setButton("btn");
    this.setButton("btn-xs");
    this.setButton("btn-danger");
  }

}
