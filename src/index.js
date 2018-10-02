module.exports = function getZerosCount(number, base) {
 
  let countzeros=0;
  let counttwo=1; 

  while ((base%2==0) && (base!==2)){
    base=base/2;
    counttwo++;
  }
    for (let k=3; k<base; k++){
    if((base%k)!==0){
      continue;
    }else if((base%k)==0){
      base=base/k;
      }
  }
   let i=1;
   while((number/Math.pow(base,i))>=1){
      countzeros+=Math.floor(number/Math.pow(base,i));
      i++;
  }
  if (base===2){
  return Math.floor(countzeros/counttwo);
  } else return countzeros; 
}
