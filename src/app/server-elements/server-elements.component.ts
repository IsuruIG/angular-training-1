import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css']
})
export class ServerElementsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('svrElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') contentPara: ElementRef;

  constructor() {
  	console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
  	console.log('ngOnChanges called');
  	console.log(changes);
  }

  ngOnInit(): void {
  	console.log('ngOnInit called');
  	// console.log('Text Content: ' + this.header.nativeElement.textContent); - Gave an error!
  	setTimeout(() => {
  		console.log('Text Content: ' + this.header.nativeElement.textContent);
  	}, 1000);
  	// console.log('Text Content of contentParagraph: ' + this.contentPara.nativeElement.textContent) - Gave an error!
  	setTimeout(() => {
  		console.log('Text Content of contentParagraph: ' + this.contentPara.nativeElement.textContent);
  	}, 1000);   
  }

  ngDoCheck() {
  	console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
  	console.log('AfterContentInit called');
  	// console.log('Text Content: ' + this.header.nativeElement.textContent); - Gave an error!
  	setTimeout(() => {
  		console.log('Text Content: ' + this.header.nativeElement.textContent);
  	}, 1000);
  	// console.log('Text Content of contentParagraph: ' + this.contentPara.nativeElement.textContent) - Gave an error!
  	setTimeout(() => {
  		console.log('Text Content of contentParagraph: ' + this.contentPara.nativeElement.textContent);
  	}, 1000);  
  }

  ngAfterContentChecked() {
  	console.log('AfterContentChecked called');
  }

  ngAfterViewInit() {
  	console.log('AfterViewInit called');
  }

  ngAfterViewChecked() {
  	console.log('AfterViewChecked called');
  }

  ngOnDestroy() {
  	console.log('OnDestroy called');
  }
}
