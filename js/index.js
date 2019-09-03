// Your code goes here


/////////TODO:click///////////

const newLogo = document.querySelector('.logo-heading')
 newLogo.addEventListener('click',e => {
    newLogo.style.backgroundColor="teal"
    // e.stopPropagation();
})





/////////FIXME:mouseEnter mouseOut////

let newNav = document.querySelectorAll('.nav-link');
newNav.forEach(item => {
  item.addEventListener('mouseenter', event => {
    item.style.transform = 'scale(1.5)';
    item.style.transition = ' transform 0.5s';
  })
})
let newNavs = document.querySelectorAll('.nav-link');
newNavs.forEach(item => {
  item.addEventListener('mouseout', event => {
    item.style.transform = 'scale(1)';
    item.style.transition = ' transform 0.5s';
  })
})


/////////////TODO: dblclick//////////
 let texts = document.querySelectorAll('.text-content');
 texts.forEach(i => {
  i.addEventListener('dblclick', e => {
    i.style.color='red'
  })
})

///////////FIXME:resize

window.addEventListener('resize', event =>{
    const changeImg = document.querySelector('.resized-time')
    changeImg.src = 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=726&q=80' 
  })

///////////TODO:click

const btns = document.querySelector('.btn')
btns.addEventListener('click', e=>{
    btns.style.color="red"
    btns.style.backgroundColor='black'
})


////////////FIXME:scroll
window.addEventListener('scroll', event =>{
    const changeImg = document.querySelector('.scroll-time')
    changeImg.src = 'https://images.unsplash.com/photo-1561207594-0b5ab8d8bb0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' 
  })



  ////////TODO: transform on click

  let newerNav = document.querySelectorAll('.nav-link');
newerNav.forEach(item => {
  item.addEventListener('click', event => {
      item.style.color='teal'
    item.style.transform= 'rotateY(180deg)'
    item.style.transition = ' transform 0.5s';
  })
})




////////FIXME: mouseover

let mouses = document.querySelector('.mouseOver')
mouses.addEventListener('mouseover', e =>{
    mouses.src = 'https://images.unsplash.com/photo-1519500099198-fd81846b8f03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
})


////////TODO: click

let newText = document.querySelector('.text-content h2')
newText.addEventListener('click', e=>{
    newText.textContent=`Let's Gooooooo!!!!!!`
})


///////FIXME: preventDefault
// let newerNav = document.querySelectorAll('.nav-link');
// newerNav.forEach(item => {
//   item.addEventListener('click', event => {
//     event.preventDefault();
//   })
// })


///////////TODO: stopPropagation
const newh2 = document.getElementsByTagName('h2')[0]
 newh2.addEventListener('click',e => {
    newh2.style.backgroundColor="red"
    e.stopPropagation();
})

const newBody = document.getElementsByTagName('body')[0]
 newBody.addEventListener('click',e => {
    newBody.style.backgroundColor="teal"
    // e.stopPropagation();
})
