function oddStringsCount(arr){
	let result = 0;
	
	arr.forEach(element => {
	   let str = element.length; 
	
		if (str % 2 == 0){
			result += 1;
		}
		
	});
	return result;
}
