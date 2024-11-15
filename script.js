// // document.getElementById("title").innerText="Today is a good day";
// const title=document.getElementById("title");
// title.innerText="Hello";

// let age= parseInt(prompt("What's your age?"));
// if(age>18){
//     title.innerText="Vote";
//     title.style.color="green";

// } else{
//     title.innerText=" Cannot Vote";
//     title.style.color="red";
// }
// // 

const inputText = document.getElementById("TodoTitle");
const list = document.getElementById("todos")
const countdown =document.getElementsByClassName("countdown")[0];
let initialcount=10;
const timer = setInterval(Countdown,1000 )

function Countdown(){
    initialcount-=1;
    countdown.innerText= initialcount;
    if(initialcount<0){
        clearInterval(timer)
    }

}
const Todos =[];

function onClickSubmitButton() {
//   console.log(inputText.value);
  Todos.push(inputText.value)
//   console.log(Todos)
 inputText.value="";
//  console.log(Todos)
 Todos.forEach((todo)=>{
    list.innerHTML+= "<li>" + todo + "</li>";
 });
}

// settings pages master save click on link then on website
// git init git add . git commit 