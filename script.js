function toggleMenu(){
  let m = document.getElementById("menu");
  m.style.display = m.style.display === "block" ? "none" : "block";
}

function openModal(){
  document.getElementById("modal").classList.add("open");
}

function closeModal(){
  document.getElementById("modal").classList.remove("open");
}

function closeModalOutside(e){
  if(e.target.id === "modal") closeModal();
     }
