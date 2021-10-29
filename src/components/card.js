
import axios from "axios"
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let cardDiv = document.createElement(`div`)
  let headlineDiv = document.createElement(`div`)
  let authorDiv = document.createElement(`div`)
  let imgContainerDiv = document.createElement(`div`)
  let imgData = document.createElement(`img`)
  let authorNameSpan = document.createElement(`span`)

  cardDiv.classList.add(`card`)
  headlineDiv.classList.add(`headline`)
  authorDiv.classList.add(`author`)
  imgContainerDiv.classList.add(`img-container`)

  headlineDiv.textContent = article.headline;
  imgData.setAttribute(`src`, article.authorPhoto);
  authorNameSpan.textContent = article.authorName;

  cardDiv.appendChild(headlineDiv)
  cardDiv.appendChild(authorDiv)
  authorDiv.appendChild(imgContainerDiv)
  imgContainerDiv.appendChild(imgData)
  authorDiv.appendChild(authorNameSpan)
  
  cardDiv.addEventListener('click', () => {
    console.log(`${article.headline}`)
  })
  return cardDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //axios.get('https://lambda-times-api.herokuapp.com/topics')

  axios.get('http://localhost:5000/api/topics') 
  .then(res => {
  res.data.topics.forEach(topic => {
    axios.get('http://localhost:5000/api/articles')
    .then(res => {
      let target = document.querySelector(selector);
      if(topic === 'node.js'){
        topic = 'node';
      } 
      let cardData = (res.data.articles[topic])
      for(let i = 0; i < cardData.length; i++){
        target.append(Card(cardData[i]));
      }
    })
  })
})
}



export { Card, cardAppender }
