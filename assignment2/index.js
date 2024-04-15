//Write a JavaScript program that prompts a user to enter their year of birth and in turn 
//prints a string in the console stating whether the user is a minor, a youth, or an elder.
//Anyone below 18 years is a minor, anyone between 18 and 36 years is a youth and the rest
// are elders.

function ageOfUser(){
    let userDateOfBirth= prompt("Enter date of birth")
    userAge= 2024-userDateOfBirth;

    if (userAge>=18 && userAge<=36){
        console.log("The user is a youth")
    }
    else if(userAge<18){
        console.log("The user is a minor")
    }
    else if(userAge>36){
        console.log("The user is an elder")
    }
    else{
        console.log("The user age group does not exist")
    }
}
ageOfUser();