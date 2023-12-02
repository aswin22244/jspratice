//CALL METHORD
// const data = {
//     name:'salman',
//     age:23,place:'malappuram'
//   }

// CallMethod.call(data,"hello")

// function CallMethod(x) {
// console.log(x,this.name,this.place);  
// }



const obj={name:"aswin",age:25};

calmethode.call(obj,"hai")
function calmethode(y){
    console.log(y,this.name,this.age);
}