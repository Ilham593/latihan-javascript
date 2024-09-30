class Handphone {
  constructor(merek,model){
    this.merek = merek;
    this.model = model;
  }

  charging(){
    console.log('charging', this.model)
  }
}

class Android extends Handphone {
  constructor(merek, model, device){
    super(merek,model)
    this.device =  device;
  }

  splitScreen(){
    console.log('android mempunyai fitur bagi layar')
  }
}

const xiaomi = new Android('xiamo 13', 'a', '')
console.log(xiaomi)