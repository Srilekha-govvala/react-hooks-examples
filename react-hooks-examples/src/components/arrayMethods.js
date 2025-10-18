/*map() – Square numbers from [2, 4, 6, 8]

filter() – Extract only names starting with “S”

reduce() – Find total marks from { subject, marks } array

forEach() – Log each item with its index*/

function mapExample(arr){
    let resultArray=arr.map(a=>a*a);
    console.log(resultArray)
}//new array
function filterExample(arr){
    let resultArray=arr.filter(a=>a[0].toLowerCase()=="s")
    console.log(resultArray)
}//new array
function reduceExample(arr){
    let reduceValue=arr.reduce((acc,sub)=>acc+sub.marks,0)
    console.log(reduceValue)
}//value
function forEachExample(arr){
    arr.forEach((f, index) => console.log(`Item: ${f}, Index: ${index}`))
}//inside the loop whatever is performed
const ex1=[2, 4, 6, 8];
const ex2=["Srilu","Akash","Sai","ram","Bharathi","Srinu"];
const ex3=[{subject:"maths",marks:23},{subject:"science",marks:45}]
const ex4=[58,89,45,768,9456]
mapExample(ex1)
filterExample(ex2)
reduceExample(ex3)
forEachExample(ex4)
