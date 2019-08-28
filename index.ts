// An 'interface' is like a description of what a Person is, but can't create instances like a class.
// Think of it like "Duck Typing" (if it looks like a duck, and acts like a duck, it is a duck.)
// We use interfaces to check that arguments we're passing are the type of thing they're supposed to be.
interface Person {
    fullName : string; 
    age : number; 
    email : string;
    single ? : boolean; // the ? means that this attribute is optional
};

let jd : Person = {
    fullName : "John Doe",
    age : 28,
    email : "JohnDoe@example.com",
    single : false
};

// if a Person is missing an attribute from the interface, an error occurs unless the attribute is optional
let jane : Person = {
    fullName : "Jane Smith",
    age : 20,
    email : "JaneSmith@example.com"
};

// argument names don't have to match variable names
// the ' : Person' makes sure that this function needs a Person object.
function showPerson(p : Person) { 
    console.log("Name: " + p.fullName);
    console.log("Email: " + p.email);
    console.log("Age: " + p.age + " years old");
    console.log("Single?: " + (p.single !== undefined ? p.single : "unknown") ); //if it is known, say it, if it is undefined, say unknown
}

showPerson(jd);
showPerson(jane);