class Controls{
  constructor(type){

    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    switch(type){
      case "KEYS":
        this.#addKeyBoardListeners();
        break;
      case "DUMMY":
        this.forward = true;
        break;

    }
//# measns that it is a private method

  }

  #addKeyBoardListeners(){
    document.onkeydown =(event)=>{
      //with arraow func it refers to the object
      switch(event.key){
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }
      
    }
    document.onkeyup =(event)=>{
      switch(event.key){
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
      }
     

    }
  }
}