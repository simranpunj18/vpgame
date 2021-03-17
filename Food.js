class Food{
    constructor(){
        friction:1.0, 
        restitution;0.5;
    }
    display(){
        var x=80,y=100; 

        ImageMODE(CENTER); 
        image(this.image,720,220,70,70); 

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50); 
                x=x+30;
            }
        }
    }
}