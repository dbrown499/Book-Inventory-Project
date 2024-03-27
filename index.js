let garbageBin = document.querySelectorAll("#garbage");
let bookForm = document.querySelector(".book-form");
let bookList = document.querySelector(".book-log");


/////// REMOVE BOOK 
garbageBin.forEach(trashButton => {
    trashButton.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        alert ("Book List Has been Updated");
        
    });
});
//////// ADD NEW BOOKS

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert ("Book List Has been Updated");
    });

    const [title, author, url, price, stock] = e.target;
    const bookObj = {
        title: title.value,
        author: author.value,
        url: url.value,
        price: price.value,
        stock: stock.value
    };
    return createBook(bookObj);
});


function createBook(makeObj) {
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("class", "book");


    const imgEle = document.createElement("img");
    imgEle.setAttribute("id", "book-cover");
    imgEle.setAttribute("src", `${makeObj.url}`);

    const bookInform = document.createElement("div");
    bookInform.setAttribute("class", "book-info");
    bookInform.innerHTML = `
    <p class="Title">${makeObj.title}</p>
    <p class="author">${makeObj.author}</p>
    <p class="stock">${makeObj.stock}</p>
    <p class="price">$${makeObj.price}.00</p>
`;

    const trash = document.createElement("img");
    trash.setAttribute("id", "garbage");
    trash.setAttribute("src", "https://cdn0.iconfinder.com/data/icons/app-user-interface-line-7/48/Primary-Challenge04_App_User_Interface-Line__Solid-48px-03-512.png");
    trash.setAttribute("alt", "garbage bin");

    trash.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });

    const lineBreak = document.createElement("hr");
    lineBreak.setAttribute("id", "between-books");

    bookDiv.append(imgEle, bookInform, trash, lineBreak);

    bookList.append(bookDiv);
}

createBook();
