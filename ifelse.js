let math =72;
let english =87;
let hindhi= 77;
let history =90;
let  total= math + english +hindhi+ history;

console.log("total: " +total);

let avg = total/4;

console.log("avg: " +avg);

let percentage = (total/400)*100;

console.log("percentage : " +percentage);

if(percentage>90 && percentage<100){
console.log ("pass with A garde");
}
x                                                                                                                                                                                                                                                                                                                                                            
else if (percentage>80 && percentage<90){
console.log("pass with B grade");
}

else if (percentage>60 && percentage<80){
console.log("pass with C grade");
}

else if (percentage>35 && percentage<60){
console.log("pass");
}

else{
console.log(fail);
}

