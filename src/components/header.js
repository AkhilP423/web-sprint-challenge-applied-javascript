const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headDiv = document.createElement('div')
      headDiv.classList.add('header')

  const headDate = document.createElement('span')
      headDate.classList.add('date')
      headDate.textContent = `${date}`
      headDiv.appendChild(headDate)

  const headh1 = document.createElement('h1')
      headh1.textContent = `${title}`
      headDiv.appendChild(headh1)

  const headTemp = document.createElement('span')
      headTemp.classList.add('temp')
      headTemp.textContent = `${temp}`
      headDiv.appendChild(headTemp)

  return headDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let headContainer = document.querySelector(selector);

  headContainer.append(Header('Lambda Times','January 6, 2021','26°'));

}

export { Header, headerAppender }
