var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var togList = document.getElementsByTagName("li");
let deleteBtn = document.getElementsByClassName("btn");
// converting html collection to array, to use array methods
Array.prototype.slice.call(deleteBtn).forEach(function(item) {
  // iterate and add the event handler to it
    item.addEventListener("click", function(e) {
    e.target.parentNode.remove()
  });

})
button.addEventListener("click",function(){
    if(input.value.length == 0) alert("enter smthing");
    else{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
})
input.addEventListener("keypress",function(event){
   if(input.value.length >0 && event.keyCode === 13){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";}
    else if(input.length == 0){
        alert("enter sone value");
    }
})
/*
Event listener syntax : 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
You didn't see the function being called like this as you may have expected: 

button.addEventListener("click", addListAfterClick());
input.addEventListener("keypress", addListAfterKeypress(event));


This is something called a callback function. 
When that line of javascript runs, we don't want the addLisAfterClick function to run because we are just adding the event listener now to wait for click or keypress. 
We want to let it know though that we want this action to happen when a click happens. 
So the function now automatically gets run (gets added the ()) every time the click happens. 
So we are passing a reference to the function without running it.*/