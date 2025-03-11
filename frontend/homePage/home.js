function setting(){
   const sidebar = document.getElementById('sidebar')
   const overlay =document.getElementById('overlay')
   sidebar.classList.toggle('sidebar-visible')
   overlay.classList.toggle('hidden')
   overlay.classList.toggle('visible')
}

function aboutUs(){
   const about_us=document.getElementById('about-us')
   const overlay =document.getElementById('overlay2')
   about_us.classList.toggle('about-us-visible')
   overlay.classList.toggle('hidden')
   overlay.classList.toggle('visible')
}
let columnSwitch=false
function toggleTheme(){
   document.documentElement.classList.toggle('darkMode');

}

function notes(){
   window.location.href= "../NotesPage/notes.html"
}
