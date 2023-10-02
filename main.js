//------------------------------------ Task 1 -------------------------------
function calcAverage(numbers){
    var sum = 0;
    var count = numbers.length;
    for(var i=0 ;i<count ;i++){
        sum+=numbers[i];
    }
    var average =sum/count;
    return average;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calcAverage(numbers));
document.getElementById("task1").innerHTML=" Task1 :  "+calcAverage(numbers);

// --------------------------------Task 2---------------------------------------
function triangleArea(base,height){
    var area = 0.5*base*height;
    return area;
}
console.log(triangleArea(7,4));
document.getElementById("task2").innerHTML="Task2 :  "+ triangleArea(7,4);

//--------------------------------Task 3----------------------------------------
function calcAge(ageInYears){
    var ageInDays=ageInYears*365;
    return ageInDays;
}
console.log(calcAge(21));
document.getElementById("task3").innerHTML="Task3 :  "+ calcAge(21);

//--------------------------------Task 4---------------------------------------
function sum(num1,num2){
    return num1+num2;
}
console.log(sum(5,5));
document.getElementById("task4").innerHTML="Task4 :  "+ sum(5,5);
//-------------------------------Task 5----------------------------------------
function firstElement(numbers){
    return firstNumber=numbers[0];
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(firstElement(numbers));
document.getElementById("task5").innerHTML="Task5 :  "+ firstElement(numbers);
//------------------------------Task 6----------------------------------------
function showName(){
    var name="Aya Ibrahim Zaki Ahmed";
    return name;
}
console.log(showName());
document.getElementById("task6").innerHTML="Task6 :  "+showName();
//-------------------------------Task 7---------------------------------------
function convertHoursToSeconds(hours){
    var seconds=hours*60;
    return seconds;
}
console.log(convertHoursToSeconds(2));
document.getElementById("task7").innerHTML="Task7 :  "+convertHoursToSeconds(2);
//-----------------------------Task 8------------------------------------------
function fourNumbers(numbers){
    var sum=0;
    var count=numbers.length;
    for(var i=0;i<count;i++){
        sum+=numbers[i];
    }
    if(sum>350){
        return true;
    }
    else{
        return false;
    }
}
var numbers=[50,100,200,40];
console.log(fourNumbers(numbers));
document.getElementById("task8").innerHTML="Task8 :  "+fourNumbers(numbers);
//----------------------------Task 9-------------------------------------------
function checkZero(num){
    if(num==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkZero(3));
document.getElementById("task9").innerHTML="Task9 :  "+checkZero(3);
//----------------------------Task 10----------------------------------------
function modulas(num1,num2){
    return num1%num2;
}
console.log( modulas(10,4));
document.getElementById("task10").innerHTML="Task10 :  "+modulas(10,4);
//---------------------------Task 11-----------------------------------------
function comparison(num1,num2){
    if(num1>num2){
        return num1;
    }
    else if (num2>num1){
        return num2;
    }
    else{
        return "They are equal."
    }
}
console.log(comparison(6,6));
document.getElementById("task11").innerHTML="Task11 :  "+comparison(6,6);
//--------------------------Task 12----------------------------------------
function checker(input){
    if(typeof(input)=="number"){
        return true;
    }
    else{
        return false;
    }
}
console.log(checker(9));
document.getElementById("task12").innerHTML="Task12 :  "+checker(9);
//-------------------------Task 13------------------------------------------
function currentDate(){
    return new Date();
}
console.log(currentDate());
document.getElementById("task13").innerHTML="Task13 :  "+currentDate();