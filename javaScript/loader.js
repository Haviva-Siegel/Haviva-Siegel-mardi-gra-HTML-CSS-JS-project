//============================================LOADER============================================//
//==CREATING A DIV ELEMENT TO CONTAIN ALL THE PREELOADER==//
var loaderContainer = document.createElement("div");
//==ADDING AN EXISTING CLASS (FROM _LOADER.SCSS) TO THE DIV ELEMENT, THIS WILL BA THE BACKGROUND OF THR PRELOADER==//
loaderContainer.className = "loader-page";
//==ADDING ALL THE ELEMENTS INSIDE THE MAIN BACKGROND DIV==//
loaderContainer.innerHTML = ' <div class="loader-container"><div>PLEASE WAIT...</div><div class="loader"><div class="loader-dot yellow"></div><div class="loader-dot purple"></div><div class="loader-dot green"></div></div></div>';
document.body.append(loaderContainer);
//==ADDING AN EVENT TO THE WINDOW- ON EVERY LOAD THE PRELOADER WIIL APEAR==//
window.addEventListener("load", function () {
  //==SETTING A TIME FOR THE FUNCTION (1S) SO THE USER WILL SEE THE LOADER EVEN WHEN THE PAGE IS LOADING FAST==//
  setTimeout(function () {
    //==REMOOVING THE PELOADER FROME THE PAGE SO THE USER CAN START USING THE WEBSIT==//
    loaderContainer.remove();
  }, 1000);
});