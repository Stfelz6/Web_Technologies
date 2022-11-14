function addTokens(input, tokens){
  let modified = input;
  if(typeof modified !== 'string'){
    throw new Error ('Invalid input')
  }
  else if(modified.trim().length<6){
    throw new Error ('Input should have at least 6 characters')
  }
  else if(typeof tokens[0].tokenName!=="string" && tokens[0]!=='{tokenName:'+tokens[0].tokenName+'}' ){
    throw new Error("Invalid array format");
  }
  else{
  for(let i=0; i< tokens.length;i++){
  if (modified.indexOf("...") !== -1) {
       modified = modified.replace("...", '${'+ tokens[i].tokenName + '}');
  }
}
  return modified;
}
}

const app = {
    addTokens: addTokens
}

module.exports = app;

// const app = {
//   tokenName: 'string',
//   addTokens: function (input){
//     let modified = input;
//   for(let i=0; i< app.length;i++){
//     if(typeof input !== 'string'){
//       	  throw new Error ("Input should be a string")
//       	}
//         else if (input.length<6){
//       	  throw new Error ("Input should have at least 6 characters")
//       	}
//       else {if(modified.indexOf('...') !== -1){
//         modified = modified.replace('...', '${'+ this.tokenName[i] +'}')
//       }
//     }
//     return modified;
//   }
//   }
//   }
// module.exports = app;
// console.log(app.addTokens('a very ...'))
