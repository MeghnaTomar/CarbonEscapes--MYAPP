class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.title = createElement('h1');
   
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("CarbonEscapes");
    this.title.position(displayWidth/2 - 110, 0);

    this.input.position(displayWidth/2 - 85 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 - 15, displayHeight/2);
  
    this.button.mousePressed(()=>{
     this.input.hide();
      this.button.hide();
      this.greeting.html("Hello!!! Welcome to the world without pollution, that you will create :)")
      this.greeting.position(displayWidth/4, displayHeight/4);
    });
    
  
  

  }
}
