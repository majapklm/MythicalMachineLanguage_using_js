function base_fun(obj,op){
	
	if(op==1||op==2||op==3){
		loadregister(obj)
	}
	else if(op==5 || op==6 || op==7 || op==8){
		operation(obj,op)
	}	
}

function loadregister(val){
	console.log("inputed Register");
	var rval = val%10000;
	var regnum = ~~(rval/1000);
	var rvalu = val%1000;
	reg[regnum]=rvalu;
}

function operation(obj,op){
	console.log("Stage_Of_Operations:")
	var regtemp = obj%10000
	var reg1 = ~~(regtemp/1000)
	var reg2 =obj%10
	if(op==5){
		reg[reg1]=reg[reg1]+reg[reg2]	
	}else if(op==6){
		reg[reg1]=reg[reg1]-reg[reg2]	
	}else if(op==7){
		reg[reg1]=~~(reg[reg1]/reg[reg2])	
	}else if(op==8){
		reg[reg1]=reg[reg1]*reg[reg2]	
	}
}

function display(ival,dval){
	console.log("10"+String(ival)+":"+String(dval))
	var t;	
	for(var i= 1;i<reg.length;i++){
		t=(30+i)*1000+reg[i]
		console.log("Register"+String(i)+" value:"+String(t))
	}
}

function main(){
	reg = []
	var k=[]
	k.push(31010)
	k.push(32020)
	k.push(71002)

	console.log("\n\n##SIMULATOR##\nMachine Codes")
	for(var i in k){
		console.log(k[i])
	}
	for(var j = 0;j<k.length;j++){
		val=~~(k[j]/10000)
		base_fun(k[j],val)
		display(j,k[j])
	}
}
main()

