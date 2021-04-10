// Dont forget to make comments!​
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'vDI3v9LNvpHBVwbvTgMn2CiKuFzNGWKs';
let url;


// manipulate API to HTML
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');


// navbar does not appear until "submit"
nav.style.display = 'none';
let pageNumber = 0;
// console.log('PageNumber:', pageNumber);


// displays results, toggles through results
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {
    // console.log(e);
    e.preventDefault();


    // interpolation to create URL
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
    // console.log('URL:', url);

    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
        console.log('URL:', url);
    }

    if (endDate.value !== '') {
        console.log(endDate.value)
        url += '&end_date=' + endDate.value;
        console.log('URL:', url);
    }

    fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json(); // take it out of json, returns as promise
        }) // 2nd promise
        .then(function (json) {
            console.log(json);
            displayResults(json);  //JavaScript object
        })
}
// then "promise resolver"
////////////////////////////////////////////////////////////////////////////////////////

function displayResults(json) {
    console.log('Display Results', json);
    // console.log(json.response.docs);

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let articles = json.response.docs;

    //object with data.key.digging for documents
    // console.log(articles);


    if (articles.length === 0) {
        console.log('No results');
    } else {
        for (let i = 0; i < articles.length; i++) {
            // console.log(i);
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
            let current = articles[i];
// i is an iteration 
            console.log('Current:', current);

            link.href = current.web_url;
            link.textContent = current.headline.main;
            para.textContent = 'Keywords: ';

            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }

            if (current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');
            heading.appendChild(link);
            article.appendChild(heading);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);

            // clearfix.style.padding = '50px'
        }
    }

    if (articles.length === 10) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

function nextPage(e) {
    // console.log('Next button clicked');
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber);
}

function previousPage(e) {
    // console.log('Previous button clicked');
    if (pageNumber > 0) {
        pageNumber--;
        // fetchResults(e);
    } else {
        return;
    }

    fetchResults(e);
    console.log('Page:', pageNumber);
}

if (pageNumber === 0) { 
    previousBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
    previousBtn.style.display = 'block';
  }

  if (pageNumber > 0) {
    nextBtn.style.display = 'none';
    previousBtn.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
