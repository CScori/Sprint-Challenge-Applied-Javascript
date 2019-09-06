// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(res => {
        Object.values(res.data.articles).map(item => {
            item.map(data => CreateCard(data))
        })
    })
    .catch(err => {
        console.log(err)
    });


function CreateCard(data) {
    const newCard = document.createElement('div');
    //class card append head and author
    const newHeadline = document.createElement('div');
    //class headline
    const newAuthor = document.createElement('div');
    //class author append imgcon newby
    const imgCont = document.createElement('div');
    //class immg-container
    const img = document.createElement('img');
    //img src 
    const newBy = document.createElement('span');

    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    imgCont.classList.add('img-container');

    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(imgCont);
    newAuthor.appendChild(newBy);

    newHeadline.textContent = (`${data.headline}`);
    img.setAttribute = (`src, ${data.authorPhoto}`);
    newBy.textContent = (`By ${data.authorName}`);

    return newCard
};
