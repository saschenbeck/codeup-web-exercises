"use strict";

console.log("connected");
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Make an array with filter that contains user objects with at least 3 languages
let threeLanguages = users.filter((user) => {
    return user.languages.length >= 3}
    );
console.log("At least 3 languages :",threeLanguages);

//Make an array with map that has strings of the users email address
let userEmails = users.map((user) => {
    return user.email;
});
console.log("user Emails: ",userEmails);

//Use reduce to get the total years of experience amongst the users, then calculate the average
let totalYears = users.reduce((total, user) => {
    return total += user.yearsOfExperience;
},0);
let averageYears = totalYears / users.length
console.log("Total number of years experienced",totalYears);
console.log("Average years of experience: ", averageYears);

//Use reduce to get the longest email amongst the users
let longestEmail = userEmails.reduce((total, email) => {
    if(total.length < email.length){
        return email;
    }
    return total
},"");
console.log(longestEmail);

//Use Reduce to get list of users name in a single string
let instructors = users.reduce((total, user,index) => {
    if(index === 0){
        return total + user.name;
    }
    if(index === users.length - 1){
      return total + ", and " + user.name + ".";
    };
    return total += ", " + user.name;
},"Your instructors are ")
console.log(instructors);

let languageList = users.map((user)=> user.languages)
    .reduce((total,language) =>{
        return total.concat(language);
    },[]).reduce((unique, item) =>{
        if(unique.includes(item) !== true){
            unique.push(item)
        }
        return unique;
    },[])
console.log(languageList);