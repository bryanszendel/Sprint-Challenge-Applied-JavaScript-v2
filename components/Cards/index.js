// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



let cardsContainer = document.querySelector('.cards-container')

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(data => {
    // console.log('ARTICLE DATA', data)

    const articlesData = data.data.articles
    console.log('article Object', articlesData)
    const articleKeys = Object.keys(data.data.articles)
    console.log('article KEYS', articleKeys)
    articleKeys.forEach(i => {
        articlesData[`${i}`].forEach((item) => {        
            const createdCard = newCard(item)
            cardsContainer.appendChild(createdCard)
        })
    })
})
.catch(error => {
    console.log('ERROR, FAILURE, BLOWING UP!', error)   
})

function newCard(object) {
    let card = document.createElement('div')
    let headline = document.createElement('div')
    let authorContainer = document.createElement('div')
    let imageContainer = document.createElement('div')
    let image = document.createElement('img')
    let authorName = document.createElement('span')

    card.appendChild(headline)
    card.appendChild(authorContainer)
    authorContainer.appendChild(imageContainer)
    imageContainer.appendChild(image)
    authorContainer.appendChild(authorName)

    card.classList.add('card')
    headline.classList.add('headline')
    authorContainer.classList.add('author')
    imageContainer.classList.add('img-container')
    
    // NOT COMPLETE YET
    headline.textContent = `${object.headline}`
    image.src = object.authorPhoto
    authorName.textContent = `By ${object.authorName}`

    return card
}