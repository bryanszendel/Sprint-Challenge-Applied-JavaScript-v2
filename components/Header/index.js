// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

let headerContainer = document.querySelector('.header-container')
let newHeader = Header()
headerContainer.appendChild(newHeader)

function Header() {
    let header = document.createElement('header')
    let dateSpan = document.createElement('span')
    let title = document.createElement('h1')
    let temp = document.createElement('span')

    header.appendChild(dateSpan)
    header.appendChild(title)
    header.appendChild(temp)
    
    header.classList.add('header')
    dateSpan.classList.add('date')
    temp.classList.add('temp')

    dateSpan.textContent = 'MARCH 28, 2019'
    title.textContent = 'Lambda Times'
    temp.textContent = '98°'

    return header
}
