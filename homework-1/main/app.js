
function distance(param1 , param2 ) {
	if(typeof param1 !== 'string'|| !param1 instanceof String){
	  throw new Error ("InvalidType")
	}
	else if (typeof param2 !== 'string' || !param2 instanceof String){
	  throw new Error ("InvalidType")
	}
	else{
	  //console.log('Just one moment')
	}
	 const track = Array(param2.length + 1).fill(null).map(() =>
	 Array(param1.length + 1).fill(null));
	 for (let i = 0; i <= param1.length; i += 1) {
		track[0][i] = i;
	 }
	 for (let j = 0; j <= param2.length; j += 1) {
		track[j][0] = j;
	 }
	 for (let j = 1; j <= param2.length; j += 1) {
		for (let i = 1; i <= param1.length; i += 1) {
		   const indicator = param1[i - 1] === param2[j - 1] ? 0 : 1;
		   track[j][i] = Math.min(
			  track[j][i - 1] + 1, // deletion
			  track[j - 1][i] + 1, // insertion
			  track[j - 1][i - 1] + indicator, // substitution
		   );
		}
	 }
	 let result=track[param2.length][param1.length]
	 return result
	 //console.log(`In order to have the same string, we should perform a number of changes equal to: ${result}  `)
  };
  const string2 = String('barney')
  try{
	console.log(distance('barnie', string2))
  } catch (error) {
	console.warn(error)
  }

module.exports.distance = distance