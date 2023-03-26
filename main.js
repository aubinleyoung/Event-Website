const mobileMenu = document.querySelectorAll('.menu-button');
const navActive = document.querySelector('.nav-active');
const navList = document.querySelectorAll('.nal-list');

mobileMenu.forEach((btn) => {
  btn.addEventListener('click', () => {
    navActive.classList.toggle('display-nav');
  });
});
navList.forEach((list) => {
  list.addEventListener('click', () => {
    navActive.classList.remove('display-nav');
  });
});
// Members
const table = [
  {
    image: 'assets/images/Aubin.jpg',
    name: 'Aubin Simpeze',
    function: 'CEO',
    description: 'Lorem ipsum dolor sit, amet consectetur ',
  },
  {
    image: 'assets/images/Angelic.jpg',
    name: 'Angelic Boye',
    function: 'Manager',
    description: 'Lorem ipsum dolor sit, amet consectetur ',
  },
  {
    image: 'assets/images/Marco.jpg',
    name: '  Marcos Josh',
    function: 'Singer',
    description: 'Lorem ipsum dolor sit, amet consectetur ',
  },
  {
    image: 'assets/images/Naomie.jpg',
    name: 'Naomie Brigth',
    function: 'Actor',
    description: 'Lorem ipsum dolor sit, amet consectetur ',
  },
];
const memberBlock = document.querySelector('.member-desktop');
table.forEach((m) => {
  memberBlock.innerHTML += `  <!-- first member -->
 
     <div class="chess-bg-container">

     <img src="assets/icones/chess.jpg" alt="chess-bg" class="chess-bg" >

     <div class="member">

        <div class="member-image">
     <img src="${m.image}" alt="aubin" >
       </div>

       <div class="member-info">
           <h3>${m.name}</h3>
           <em class="orange italic">${m.function}</em>
           <p>${m.description}</p>
       </div>

   </div>
   </div>

  `;
  return memberBlock;
});
//scroll annimation

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
    else{
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements=document.querySelectorAll('.hidden')
hiddenElements.forEach((e)=>observer.observe(e));

