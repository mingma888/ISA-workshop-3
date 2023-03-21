
//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function add(x){
    if (a>=1000){
        sum=0;
    for (i=1;i<=x;i++){
        sum=sum+i;
    }
    return sum;
    }else{
        return "Invalid";
    }
}
console.log(add(600));//Create a function that returns a base-2 (binary) representation of a base-10 (decimal)
//string number. To convertis simple: ((2) means base-2 and (10) means base-10)
//010101001(2) = 1 + 8 + 32 + 128.
//Going from rightto left,the value ofthe most right bitis 1, now from that every bitto the
//left will be x2. The values of an 8 bit binary number are (256, 128, 64, 32, 16, 8, 4, 2, 1).
function abc(a){
    x=""
    if (a>0 && a<1024){
        while (a>0){
            z=a%2;
            x=z+x;
            a=Math.trunc(a/2);
        }
    }else if(a==){
        x=x+0;
    }else{
        x="Number more than 1024 is not accepted"
    }
    return x;
}
console.log(abc(10));
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise reture false.
function trfu(a,b){
    if ((a,b)<100){
       return true;
     } else{
        return false;
     }
    }
console.log(trfu(99,0));
//Write a function that returns the string "something" joined with a space " " and the given argument a.
function abc(a){
    return "something ${a}";
}
console.log(abc("is better than nothing."))
// Write a function that takes the base and height of a triangle and return its area.
function triangleArea(b,h){
    return (b*h)/2;

}
console.log(triangleArea(5,6));
//The left shift operation is similar to multiplication by powers oftwo. Sample calculation using the left shift operator (<<):
//10 << 3 = 10 * 2^3 = 10 * 8 = 80
//-32 << 2 = -32 * 2^2 = -32 * 4 = -128
//5 << 2 = 5 * 2^2 = 5 * 4 = 20
//Write a function that mimics (withoutthe use of <<)the left shift operator and returns
//the resultfrom the two given integers.
//Examples
//shiftToLeft(5, 2) ➞ 20
//shiftToLeft(10, 3) ➞ 80
//shiftToLeft(-32, 2) ➞ -128
//shiftToLeft(-6, 5) ➞ -192
//shiftToLeft(12, 4) ➞ 192
//shiftToLeft(46, 6) ➞ 2944
function neg(a,b){
    if (b>=0){
        return (a*(2**b));
    
    }else{
        return "Negative number."
    }
}
console.log(neg(46.6));
//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value
let base = (a,b) => {
    return 2*a+3*b;
}
console.log(base(5,6));
//Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
function xyz(a){
    sum=0;
    while (a>0){
        x=a%10;
        a = Math.trunch(a/10);
        sum=sum+x;

    }
    if (sum%2==0){
        return "Evenish";
    }else{
        return "Oddish";
    }
}
console.log(xyz(121));
