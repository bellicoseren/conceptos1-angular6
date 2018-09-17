import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.css'] 
})
export class TitleComponent implements OnInit {

    public name: string = "Rene";
    public valorNumerico: number = 35;
    private valorPrivado: string = "Valor privado";
    private edades: number[] = [2, 4, 7];
    private edad: number;
    public isAvailable: boolean = false;
    public css_classes: string[] = ['active', 'shadow'];

    constructor(){}

    ngOnInit(){
        this.name="Reni";
        this.edad=25;
        setTimeout(() => this.name = 'Kevonito', 4000);
        setTimeout(() => this.isAvailable = true, 4000);
        setTimeout(() => this.css_classes = ['shadow'], 3000);
    }

    getNombreEdad(): string {
        return `${this.name} : ${this.edad}`;
    }

}

