const ContentObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    }
    else{
      entry.target.classList.remove("show")
    }
    
  });
})


const entryObserver = document.querySelectorAll(".hidden")

console.log(entryObserver);

entryObserver.forEach((entryElement) => ContentObserver.observe(entryElement))