let a=prompt("Enter 1st Number:");
let c=prompt("Enter \n1 For Square Root \n 2 For Cube Root\nEnter Your Choice:");
if (c==2){
    n=(parseInt(a)**0.33333333333);
    console.log("Your Answer is:"+n);
}
else if (c==1) {
    n=(parseInt(a)**0.5);
    console.log("Your Answer is:"+n);
}else{
    console.log("Invalid Operation,Please Check Your Input");
}