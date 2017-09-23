const func=function(num1, num2, num3) {
	return num1+num2*num3;
};
	const something=function(){
		return ("Hello")
	};
const action=function(a,b,c){
		const val=a+b+c;
		console.log(val);
	};
	const fullName=function(firstname,lastname){
		return(firstname+" "+lastname);
	};
	const string1=function(x,y,z){
		const len1=x.lenght;
		const len2=y.lenght;
		const len3=z.length;
	
		if(len1>len2 && len1<len3)
		{
			return z;
		}
		if(len2>len1 && len2>len3)
		{
			return y;
		}
		if(len2<len1 && len2>len3)
		{
			return x;
		}
		if(len3>len1 && len3>len2)
		{
			return z;
		}
		if(len3<len1 && len3>len2)
		{
			return x;
		}
		
	};
	const compare=function(k,g) {
		if(k===g){
			return 0;
		}
		if(k>g){
			return 1;
		}
		if(k<g){
			return -1;
		}
	};
	const trueThrue=function(a,b,c){
		if(a){
			return a;
		}
		else if(b){
					return b;
			}
			else{
				return c;
			}
	};
	const result=(string1("as","sad","sdsa"));
		console.log(result)