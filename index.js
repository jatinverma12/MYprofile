var cards=document.getElementsByClassName('card');
for(var i=0;i<cards.length;i++)
  cards[i].addEventListener('click',function(){
    if(this.classList.contains("cardclicked"))
    {
      this.classList.remove("cardclicked");
      this.className='card';
    }
      
    else
    {
      this.className='cardclicked';
    }
    
  });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}