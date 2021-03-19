const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'vDI3v9LNvpHBVwbvTgMn2CiKuFzNGWKs';
let url;

// // Search Form
// const searchTerm = document.querySelector('.search');
// const startDate = document.querySelector('.start-date');
// const endDate = document.querySelector('.end-date');
// const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submit');

// // Results Navigation
// const nextBtn = document.querySelector('.next');
// const previousBtn = document.querySelector('.prev');
// const nav = document.querySelector('nav');

// // Results Section
// const section = document.querySelector('section');


// //Styling
// nav.style.display = 'none';
// let pageNumber = 0;
// let displayNav = false;

// //
// searchForm.addEventListener('submit', fetchResults);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);

// //
// function fetchResults(e){
//     e.preventDefault();
//     fetch(url).then(function(result){
//         return result.json()
//     }).then(function(json){
//         displayResults(json);
//     });

//     function displayResults(json){
//         //console.log('DisplayResults', json)
//         //console.log(json.response.docs)
//         let articles = json.response.docs;
//         //console.log(articles);
//         if(articles.length === 0){
//             console.log("No results");
//         } else {
//             for(let i = 0; i < articles.length; I++){
//                 let article = document.createElement('article');
//                 let heading = document.createElement('h2');

//                 article.appendChild(heading);
//                 section.appendChild(article);
//             }            

//         }
//     };

// // Assemble the Full URL
// url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.nodeValue;
// console.log(url);
// }
// // End Date & Start Date
// if(startDate.value !== ''){
//     console.log(startDate.value)
//     url += '&begin_date=' + startDate.value
// };

// if(endDate.value !== ''){
//     url += '&end_date=' + endDate.value;
// };

// // Fetch
// fetch(url)
// .then(function(result){
//     console.log(result)
//     return result.json();
// }).then(function(json){
//     console.log(json);
// });


// // Pagination
// function nextPage(){
//     console.log("Next button clicked");
// }
// function previousPage(){
//     console.log("Next button clicked");
// }
///////////////////////////////////////////////////////////////////
//Search Form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const sumbitBtn = document.querySelector('.submit');

//Results Nav
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
//Results Section
const section = document.querySelector('section');
const nav = document.querySelector('nav');

nav.style.display = 'none';
let pageNumber = 0;
console.log('PageNumber: ', pageNumber);
let displayNav = false;

//Event Listener
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//fetchResults()
// function fetchResults(e){
//     console.log(e);
//     url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
//     console.log(url);
// } took out for preventDefault()

//preventDefault() -- not sure about the experiment

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url);
    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if (endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };
    fetch(url).then(function (result) {
        return result.json();
    }).then(function (json) {
        displayResults(json);
    })
}

//not sure about this

function displayResults(json) {
    //console.log(json.response.docs);
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;
    console.log(articles);
    if (articles.length === 10){
        nav.style.display = 'block';

    if (pageNumber === 0) { 
        previousBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'block';
        previousBtn.style.display = 'block';
      }
    } else {
      if (pageNumber > 0) {
        nextBtn.style.display = 'none';
        previousBtn.style.display = 'block';
      } else {
        nav.style.display = 'none';
      }
    }

    if (articles.length === 0) {
        let para = document.createElement('p');
        para.textContent = 'No results returned.'
        section.appendChild(para);
    } 
    else {
        for (let i = 0; i < articles.length; i++) {

            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];

            link.href = current.web_url;
            link.textContent = current.headline.main;
            para.textContent = 'Keywords: ';

            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }
            if(current.multimedia.length > 0){
                img.src ='http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }


            clearfix.setAttribute('class', 'clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            section.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

    function nextPage(e){
        pageNumber++;
        fetchResults(e);
        console.log("Next Page:", pageNumber);
};
    function previousPage(e) {
        if (pageNumber > 0){
            pageNumber--;
            console.log("Previous page:", pageNumber);
        } else{
            return;
        }
        fetchResults(e);
};
       