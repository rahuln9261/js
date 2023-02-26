let a=prompt("Enter 1st Number:");
let b=prompt("Enter 2nd Number:");
let c=prompt("Enter \n1 For Multiplication\n 2 For Divison\n 3 For Addition\n 4 For Subtraction\nEnter Your Preference:");
if (c==1){
    n=(parseInt(a)*parseInt(b));
    console.log("Your Answer is:"+n);
}
else if (c==2) {
    n=(parseInt(a)/parseInt(b));
    console.log("Your Answer is:"+n);
}
else if (c==3) {
    n=(parseInt(a)+parseInt(b));
    console.log("Your Answer is:"+n);
    
}
else if (c==4) {
    n=(parseInt(a)-parseInt(b));
    console.log("Your Answer is:"+n);
    
}else{
    console.log("Invalid Operation,Please Check Your Input");
}