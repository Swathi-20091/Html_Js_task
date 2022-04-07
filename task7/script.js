function searchFun(){
    var key=document.querySelector("#searchBox").value.toUpperCase();
    var myItems=document.querySelectorAll(".column");
    for(let i=0;i<myItems.length;i++){
      var inItems=myItems[i].querySelector("figcaption").innerText.toUpperCase();
      if(inItems.indexOf(key)>-1){
        myItems[i].style.display=""
      }
      else{
        myItems[i].style.display="none"
      }
    }
  }