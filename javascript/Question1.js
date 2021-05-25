let Largest;
num1 = parseInt(prompt("Enter the num1 value:"));
num2 = parseInt(prompt("Enter the num2 value:"));
num3 = parseInt(prompt("Enter the num3 value:"));

if( num1 >= num2 && num1 >= num3)
{
    Largest= num1;
}
else if(num2 >= num1 && num2 >= num3)
{
    Largest=num2;
}
else{
    Largest=num3;
}

document.write("The Largest number is" + " "+Largest);