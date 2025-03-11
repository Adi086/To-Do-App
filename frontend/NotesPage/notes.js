console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);//1366,645

function noteEdit(){
    const note=document.getElementById('note-edit')
    const overlay =document.getElementById('overlay')
    note.classList.toggle('note-edit-active')
    overlay.classList.toggle('hidden')
    /verlay.classList.toggle('visible')
 }

function home(){
    window.location.href = "../homePage/home.html";
}