class Box{
   constructor(){
        this.x= 100;
        this.y= 300;
        this.w= 80;
        this.h= 80;
        this.cor =["pink","blue","red","purple"];
       
    }
  
    display(){
        rectMode(CENTER);
        fill (this.cor[1])
        rect (this.x,this.y,this.w,this.h)  
        
    }
}