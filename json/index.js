// object 

let personInfo = {
    fName : "bharath",
    lName : "kumar",
    study : "bba",
    favHobbies :["movies","cricket","adventures"],
    family :{
        fatherName : "ramulu",
        motherName : "parvathi",
    },
    fatherOccupation:"business",
    motherOccupation:"homemaker",
}


let moreInfo = {
    sibling :{
        sister : "Nikitha",
        brother : "saikrishna"
    }
}

let merged = {
    ...personInfo,
    ...moreInfo
}
console.log(merged);

let {fName,lName,study,fatherOccupation,motherOccupation,sibling,brother,sister,...restItems} = merged ;

console.log(fName);
console.log(lName);
console.log(study);
// console.log(sister);       Doubt here
// console.log(brother);
console.log(sibling);

console.log(restItems);


console.log("***********Array rest and spread operator**********");

let arry = ["bharath","kumar","kodakanti","gautami vidya kshetra"];

let arry2 =[2526,"r15","biryani","movires"]

let merged2 = [
    ...arry,
    ...arry2
]

console.log(merged2);


let [nameL,nameF,familyName,school,...restDetails] = merged2


console.log(nameL);
console.log(nameF);
console.log(restDetails);


console.log("****** ternary operator*******");


let a = 100;
let b = 95;
let c = 100;

let comparison = a > b ? (a > c ? `${a} is greater than the other two numbers` :` ${c} is greater than the other two numbers`) : (b > c ? `${b} is greater than the other two numbers` : `the two number greater than the other one numbers`);

console.log(comparison);


console.log("****json******");

let object ={
    studentName : "bharath",
    rollNumber :25225,
    branch :  "btech",
    batch : 2018,
    favHobbies :["food","traveling","movies"]
}

let convert = JSON.stringify(object);
console.log(convert);


let converParse = JSON.parse(convert);

console.log(converParse);



let details = {
    name : "bharath",
    lName : "kumar",
    rollNumber:2252,
    favThings : ["movies","adventures","food"],
    qulification :{
        degree :"bba",
        cgpa : 6.2
    },
    regular : true,
    details2:function(){
       return this;
    }
    
}


console.log(details.details2());














































