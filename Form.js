class Form{
   constructor(){
       this.button=createButton("PLAY")
       this.reset=createButton("RESTART");
   }
   display(){
       this.button.position(displayWidth/2-20,displayHeight/2)
       this.reset.position(100,100);
       this.reset.mousePressed(()=>{
           writeData(0);
       })
       this.button.mousePressed(()=>{
        writeData(1);
    })
   }
   
   hide(){
       this.button.hide();
      
   }


}