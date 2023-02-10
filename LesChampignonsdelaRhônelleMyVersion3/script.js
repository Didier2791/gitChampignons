window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    
    document.querySelector(".navbar").style.marginTop = "-110px";
    
  } else {
   
    document.querySelector(".navbar").style.marginTop = "-8px";
   
  }
};
