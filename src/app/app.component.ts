import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    screen1: number = 0;
    screen2: number = 0;
    operation: string = "";
    memorys: any = [];
    class_mem {};
          
};


    title = 'app';

    //פונקציית לחיצה על ספרות
    click_number(number) {
        this.screen1 = this.screen1 * 10 + number;
    };

    //פונקציית איפוס צג תוצאה
    clear() {
        this.screen1 = 0;
        this.screen2 = 0;
        this.operation = '';
    };

    //פונקציית +
    click_plus() {
        if (this.operation != '-') {
            if (this.screen2 == 0) {
                this.screen2 = this.screen1;
                this.screen1 = 0;
                this.operation = '+';
            }
            else {
                this.operation = '+';
                this.screen2 = this.screen2 + this.screen1;
                this.memorys.this.first.push(this.screen1);
                this.memorys.this.op.push(this.operation);
                this.memorys.this.secand.push(this.screen2);
                alert(this.memorys[this.memorys.length-1]);
                this.screen1 = 0;
            }
           
        };
        if (this.operation == '-') {
            this.screen2 = (this.screen2 - this.screen1);
            this.operation = '+';
            this.screen1 = 0;
        };
        };

    //פונקציית -
        click_minus() {
            if (this.operation != '+'){
                if (this.screen2 == 0) {
                    this.screen2 = this.screen1;
                    this.screen1 = 0;
                    this.operation = '-';
                };
                if (this.screen2 != 0) {
                  this.operation = '-';
                  this.screen2 = (this.screen2 - this.screen1);
                  this.screen1 = 0;
                };
             
            };
            if (this.operation == '+') {
                this.screen2 = (this.screen2 + this.screen1);
                this.operation = '-';
                this.screen1 = 0;
            };        
        };
   
     //פונקציית =
     click_eval() {
            if (this.screen2 != 0) {
                if (this.operation == '+') {
                    this.screen2 = (this.screen2 + this.screen1);
                    this.screen1 = 0;
                };
                if (this.operation == '-') {
                    this.screen2 = (this.screen2 - this.screen1);
                    this.screen1 = 0;
                };
            };
    };
};
