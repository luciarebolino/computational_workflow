(function() {
  console.log ("it works")
})();

(function() {
  document.addEventListener("keyup", function(event){
    if(event.target.matches(".count-chars")){
    //get input value and lenght
  const value = event.target.value;
  const valueLength = event.target.value.length;
    //get data value
  const maxChars = parseInt(event.target.getAttribute("data-max-chars"));
  const remainingChars = maxChars - valueLength;
  if(valueLength > maxChars){
    //limitchars to maxChars
    event.target.value = value.substr(0,maxChars);
    return; // end function execution
  }
  event.target.nextElementSibling.innerHTML = remainingChars + "characters remaining";
  }
  })
})();

