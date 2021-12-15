export class ACoolClass {  
  public Param: string;
  
  constructor(thatTakesATypedParameter: string) {
    this.Param = thatTakesATypedParameter;
  }

  getParam(){
    return this.Param;
  }
}
