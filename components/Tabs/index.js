// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsTabs = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(data => {
    console.log('DATA', data)
    const myData = data.data.topics
    console.log(myData)
    myData.forEach(topic => {
        const newTabItem = newTab(topic)
        topicsTabs.appendChild(newTabItem)
    })
})
.catch(error => {
    console.log('The API is down, please try again soon: ', error)
})

function newTab(topic) {
    let tab = document.createElement('div')

    tab.classList.add('tab')

    tab.textContent = `${topic}`

    return tab
}