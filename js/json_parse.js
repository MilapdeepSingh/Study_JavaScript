let data = `{
    "name": "Milapdee Singh",
    "age": 30,
    "is_student": true,
    "Passport_no": null,
    "p_lang": ["JavaScript", "Liquid", "PHP"],
    "address": {
        "city": "Amritsar",
        "State": "Punjab",
        "Pincode": 143149
    }
} 
`;
let dObject = JSON.parse(data);
console.log(dObject['address']['city']);

var numbers = [23, 56, 85, 12, 50, 69, -777, "bbb", "aaa", "abhfk"];

numbers.sort();

console.log(numbers);

let student = {
    "name": "Milapdee Singh",
    "age": 30,
    "is_student": true,
    "Passport_no": null,
    "p_lang": ["JavaScript", "Liquid", "PHP"],
    "address": {
        "city": "Amritsar",
        "State": "Punjab",
        "Pincode": 143149
    }
};

let studentjsson = JSON.stringify(student);

console.log(studentjsson)



  