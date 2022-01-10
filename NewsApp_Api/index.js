// 900ea96c1ac6487d9c5b76a7a8d57ddb
let collapse = document.getElementById('collapseExample');
let btnCollapse = document.getElementById('btn-collapse');
let newsContainer = document.getElementById('news-container');
let source = 'bbc-news';
let API_KEY = '900ea96c1ac6487d9c5b76a7a8d57ddb';
//create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`, true);

xhr.onload = function () {
  if(this.status === 200) {
    let json = JSON.parse(this.responseText);
    let article = json.articles;
      // console.log(article);
     
      article.forEach(function (element,index) {
// console.log(element);
        let div = document.createElement('div');
        div.className='card';
       
        let ne = `

  <div class="card-header" id="heading${index}">
    <h2 class="mb-0">
      <button class="btn btn-link collapsed" type="Button" data-toggle="collapse" data-target="#collapse${index}"
      aria-expanded="true" aria-controls="collapse${index}">
      ${element["title"]}
      </button>
      </h2>
      </div>

      <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}"
      data-parent="#news-container">
      <div class="card-body">${element["content"]}. <a href="${element['url']}" target="_blank">Read more</a></div>
      </div>
      
      `;
      div.innerHTML = ne;
      newsContainer.appendChild(div);
      });
     
    
  } else{
    console.log("some error occured");
  }
}
xhr.send();

