const mobileMenu = document.querySelectorAll(".menu-button");
const navActive = document.querySelector(".nav-active");
const navList = document.querySelectorAll(".nal-list");

mobileMenu.forEach((btn) => {
  btn.addEventListener("click", () => {
    navActive.classList.toggle("display-nav");
  });
});
navList.forEach((list) => {
  list.addEventListener("click", () => {
    navActive.classList.remove("display-nav");
  });
});
// Members
const table = [
  {
    image: "assets/images/Aubin.jpg",
    name: "Aubin Simpeze",
    function: "CEO",
    description: "Lorem ipsum dolor sit, amet consectetur ",
  },
  {
    image: "assets/images/Angelic.jpg",
    name: "Angelic Boye",
    function: "Manager",
    description: "Lorem ipsum dolor sit, amet consectetur ",
  },
  {
    image: "assets/images/Marco.jpg",
    name: "  Marcos Josh",
    function: "Singer",
    description: "Lorem ipsum dolor sit, amet consectetur ",
  },
  {
    image: "assets/images/Naomie.jpg",
    name: "Naomie Brigth",
    function: "Actor",
    description: "Lorem ipsum dolor sit, amet consectetur ",
  },
];
const memberBlock = document.querySelector(".member-desktop");
table.map((e) => {
  memberBlock.innerHTML = `  <!-- first member -->
 
     <div class="chess-bg-container">
     <img src="assets/icones/chess.jpg" alt="chess-bg" class="chess-bg" >
     <div class="member">
     <div class="member-image">

      
     <img src="${table[0].image}" alt="aubin" >
       </div>
       <div class="member-info">
           <h3>${table[0].name}</h3>
           <em class="orange italic">${table[0].function}</em>
           <p>${table[0].description}</p>
       </div>
   </div>
     </div>

  
   <!-- second member -->
   <div class="chess-bg-container">
   <img src="assets/icones/chess.jpg" alt="chess-bg" class="chess-bg" >
   <div class="member">
      <div class="member-image">
          <img src="${table[1].image}" alt="auinleyoung" >
      </div>
      <div class="member-info">
      <h3>${table[1].name}</h3>
          <em class="orange italic">${table[1].function}</em>
          <p>${table[1].description}</p>
      </div>
  </div>
  </div>


   <!-- third member -->
   <div class="chess-bg-container">
   <img src="assets/icones/chess.jpg" alt="chess-bg" class="chess-bg" >
   <div class="member">
      <div class="member-image">
          <img src="${table[2].image}" alt="aubin" >
      </div>
      <div class="member-info">
      <h3>${table[2].name}</h3>
          <em class="orange italic">${table[2].function}</em>
          <p>${table[2].description}</p>
      </div>
  </div>
  </div>
   <!-- fourth member -->
   <div class="chess-bg-container">
   <img src="assets/icones/chess.jpg" alt="chess-bg" class="chess-bg" >
   <div class="member">
      <div class="member-image">
          <img src="${table[3].image}" alt="auinleyoung" >
      </div>
      <div class="member-info">
          <h3>${table[3].name}</h3>
          <em class="orange italic">${table[3].function}</em>
          <p>${table[3].description}</p>
      </div>
  </div>
  </div>
  `;
});
