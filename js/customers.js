function myFunction() {

    document.getElementById('body').style.backgroundColor = '#80beff';
    alert("wait for a moment");
}
function change_background() {
//     document.getElementById('get_app').style.backgroundColor = 'red'
 }


// let t = 5;
// console.log( t);


    // let t = "Make the switch to get prescriptions the easy way, no waiting, no hassle."
    // console.log (t);
    // document.getElementById("demo").innerHTML= "hello";

var p = document.createElement( "p");
var content = document.createTextNode('Make the switch to get prescriptions the easy way, no waiting, no hassle');
p.appendChild(content);
// document.body.appendChild(p);
document.getElementById("demo").appendChild(p)

persons = [ "sarah ", "asra " , "lana "]


for (i=0 ; i < persons.length ; i++){
    console.log( "hi " + persons[i] + "welcome");
    

}
const array = [
    {
        Image: {image:"./images/new_prescription.svg", title:"Order prescriptions online in seconds"},
    },
    {
        Image: {image:"./images/new_prescription.svg", title:"Order prescriptions online in seconds"},
    }

]

// let array = [
//  {number:5, title:"Order prescriptions online in seconds"},

//  {image:"./images/new_prescription.svg", title:"Order prescriptions online in seconds"},

// ]
console.log ( array )

let f = array.find((v)=>v.number == 5)




const newarray=array.map((item,index)=>(`<img key=${index} src=${item?.Image?.image} width="200px" height="200"/>`))
console.log(newarray)
test = [1,5,6,9,10 ]

test = [1,5,6,9,10]

var sara = document.createElement ("sara")
sara.innerHTML=newarray
document.getElementById("images_text").append(sara)




// const arr = [
//     {image:"./images/new_prescription.svg", title:"Order prescriptions online in seconds"},
//     {image:"./images/new_prescription.svg", title:"Order prescriptions online in seconds"},
//     {image:"./images/new_prescription.svg", title:"Order prescriptions online in seconds"},

// ]
// console.log ( arr)



function email() {
    alert('check your email')
}


let x = false;
function burger() {
    console.log("       ",x)

    if (x) {
        document.getElementById("burger-a").style.opacity= "1"
        x=true
    }
    else {
        document.getElementById("burger-a").style.opacity = "0"
        x=false

    }
}

// const burger = () => {
//     console.log("test")
//     if (x == false) {
//         document.getElementById("burger_menu").style.display = "none"
//     }
//     else {
//         document.getElementById("burger_menu").style.display = "flex"

//     }
// }
// let y = false
// const service_menu = () => {
//     if (y==true) {
//         document.getElementById('menu-service').style.display= 'none'
//         y=false
//     }else{
//         document.getElementById('menu-service').style.display= 'flex'
//         y=true 
//     }
// }
// to do 
// for (){
//     append 
// }
