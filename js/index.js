var toggle = false;
var profile = document.querySelector(".image-text-div");
var social = document.querySelector(".social-share");
var bgColor = document.querySelector(".card-bar");
var triangleArrow = document.querySelector("#triangle-down");

document.getElementsByClassName("share-container")[0].addEventListener("click", function(){

  if (!toggle) {
    profile.style.display = "none";
    social.style.display = "flex";
    triangleArrow.style.display = "flex";

    if(screen.width > 900) {
      bgColor.style.backgroundColor = "white";
    }
    else {
      bgColor.style.backgroundColor = "hsl(217, 19%, 35%";
    }
  }

  else {
    profile.style.display = "flex";
    social.style.display = "none";
    bgColor.style.backgroundColor = "white";
    triangleArrow.style.display = "none";
  }
  toggle = !toggle;
});
