module.exports = function getZerosCount(number, base) {
 
let countzeros=0;
let maxDevider=0;
let countMaxDevider=0;
let copyBase=base;

let k=2; // k-devider
// find max devider
while ( k<=copyBase ){
  if(copyBase%k===0 && (copyBase/k===1)){
  copyBase=copyBase/k;
   maxDevider=k;
}  else  if(copyBase%k===0){
    copyBase=copyBase/k;  
  }
  else if((copyBase%k)!==0){
  k++;
   } 
}
// compare value 2^ and max devider^
while (base%maxDevider===0){
  base=base/maxDevider;
  countMaxDevider++;
}
if (Math.log2(base)>=Math.pow(maxDevider, countMaxDevider)){
  maxDevider=2;
  countMaxDevider=Math.log2(base);
} else if (Math.log2(base)<Math.pow(maxDevider, countMaxDevider)){
  maxDevider=maxDevider;
  countMaxDevider=countMaxDevider;
}
//count countzeros factorial
 let i=1;
 while((number/Math.pow(maxDevider,i))>=1){
    countzeros+=Math.floor(number/Math.pow(maxDevider,i)); 
    i++;
}
  return Math.floor(countzeros/countMaxDevider);
}
