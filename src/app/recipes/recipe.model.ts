export class Recipe {
    
    public name: string;
    public discription: string;
    public img: string;

    constructor(name:string, desc:string, img:string) {
        this.name = name;
        this.discription = desc;
        this.img = img;
    }

}