fetch("data/articles.json")
.then(response => response.json())
.then(data => {

    let list = document.getElementById("article-list");


    data.forEach(article => {

        let div = document.createElement("div");

        div.className = "article";


        div.innerHTML = `

        <a href="articles/${article.file}">
        ${article.id.toString().padStart(3,"0")} · ${article.title}
        </a>


        <p>
        ${article.description}
        </p>


        <p>
        作者：${article.author}
        时间：${article.time}
        </p>

        `;


        list.appendChild(div);

    });

});
