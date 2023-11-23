var grade=prompt("enter your grade");
grade=parseInt(grade);
if(grade>=80){
    console.log("A");
}
else if(grade>=70 && grade<80){
    console.log("B");
}
else if(grade>=60 && grade<70){
    console.log("C");
}
else if(grade>=50 && grade<60){
    console.log("D");
}
else{
    console.log("F");
}