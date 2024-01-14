function add_hover(Thumbs) {
  for (const thumb of Thumbs) {
    thumb.addEventListener("mouseover", ()=> {
      console.log(thumb.classList);
    });
  }
}

// onload
add_hover(document.getElementsByClassName("thumb"));

// on new pops
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    var newChild = mutation["addedNodes"];
    for (const child of newChild) {
      if (child.classList.contains("thumb-listing-page")) {
        add_hover(child.getElementsByClassName("thumb"));
      }
    }
  });
});

observer.observe(document.getElementById("thumbs"), {
  childList: true
});
