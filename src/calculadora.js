let value=40+7
let change=`${value}`

class Calculator{
	constructor(input){
		this.result=0
		this.input=0
		this.inputString=`${this.input}`
	}
	getInput(input){
		this.input=input
	}
	getOperacion(operacion){
		this.result=operacion
	}
	getResult(){
	   return this
	}
}

const cal=new Calculator()
cal.getInput(value)
cal.getOperacion(change)

console.log(cal.getResult())
console.log("esto funcion?")


