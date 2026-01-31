// ============== Header ==================== //
document.addEventListener('DOMContentLoaded', () => {
  let mainHeaderNav = document.getElementById('headerNav_');
  let headerNavContent = document.getElementById('headerNavContent_');
  let headerNavOpenMenu = document.getElementById('openMenu_');
  let headerNavCloseMenu = document.getElementById('closeMenu_');

  if(headerNavOpenMenu){
    headerNavOpenMenu.addEventListener('click', ()=> {
      headerNavContent.classList.add('show');
      headerNavOpenMenu.classList.add('active');
      headerNavCloseMenu.classList.add('active');
      mainHeaderNav.style.backgroundColor = 'rgb(54, 30, 30)';
    })
  }

  if(headerNavCloseMenu){
    headerNavCloseMenu.addEventListener('click', ()=> {
      headerNavContent.classList.remove('show');
      headerNavOpenMenu.classList.remove('active');
      headerNavCloseMenu.classList.remove('active');
      mainHeaderNav.style.backgroundColor = '';
    })
  }

})



// let openIcon = document.getElementById('openIcon_');
// let menuIcon = document.querySelector('._navLink');
// let closeIcon = document.querySelector('._closeIcon');
// let closeIconAll = document.querySelectorAll('._navLink li');


// openIcon.addEventListener('click', () =>{
//   menuIcon.classList.add('show')
// })
// closeIcon.addEventListener('click', () => {
//   menuIcon.classList.remove('show')
// });
// closeIconAll.forEach(li => {
//   li.addEventListener('click', () => {
//     menuIcon.classList.remove('show')
//   })
// })
// ============================== //

// ============== FAQ ============== //
document.addEventListener('DOMContentLoaded', () => {
  let faqItems = document.querySelectorAll('._faqItem');
  faqItems.forEach(item => {
    let faqHeading = item.querySelector('._faqHeading');
    let faqParagraph = item.querySelector('._faqParagraph');
    let faqIcon = item.querySelector('._faqIcon');
    
    faqHeading.addEventListener('click', ()=>{
      if(faqParagraph.style.height){
        faqParagraph.style.height = null;
        faqIcon.textContent = '+';
      } else {
        faqParagraph.style.height = faqParagraph.scrollHeight + 'px';
         faqIcon.textContent = '-';
      }
    })
  })
})
// ======================= //