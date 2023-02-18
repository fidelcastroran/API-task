let book = async () => {
  try {
    let url = "https://www.anapioficeandfire.com/api/books";
    let res = await fetch(url, { method: "GET" });
    let data = await res.json();
    console.log(data);
    let characters = [];
    const searchInput = document.querySelector("[data-search]");

    let users = []

    searchInput,
      addEventListener("input", (e) => {
        const value = e.target.value;
        users.forEach(user => {
            const isVisible =  user.name.toLowerCase().includes(value)
            user.element.classlist.toggle("hide", !isVisible)
            
        })
        
      });

      users = data.map(i => {
        let bkname = i.name;
      let bkisbn = i.isbn;
      let bknop = i.numberOfPages;
      let bkAuthor = i.authors[0];
      let bkPublisher = i.publisher;
      let bkReleaseDate = i.released;
      

    // for (let i of data) {
    //   let bkname = i.name;
    //   let bkisbn = i.isbn;
    //   let bknop = i.numberOfPages;
    //   let bkAuthor = i.authors[0];
    //   let bkPublisher = i.publisher;
    //   let bkReleaseDate = i.released;

      // let j = 0
      // let k = 5
      // while (j<k) {
      // let charurl = i.characters[j];
      // j++

      // let res1 = await fetch(
      //     charurl,
      //     { method: "GET" }
      // )
      // let data1 = await res1.json();
      // let result = data1.name;
      // if (result !== ""){ characters.push(result) }
      // else (k++);
      // }

      let resultEl = document.getElementById("books");
      let result = `<div class="card">
                                    
                                        <h5 class="card-title" id="bookTitle"><span class='cBHeading'>Book Title : <span class='cBContent'>${bkname}.</h5>
                                        <p> <span>isbn :</span> <span >${bkisbn}.</span></p>
                                        <p > <span>Author Name : </span> <span >${bkAuthor}.</p>
                                        <p > <span >Publisher Name : </span> <span >${bkPublisher}.</p>
                                        <p > <span >Release Date : </span> <span >${bkReleaseDate}.</p>
                                        <p > <span >Characters : </span> <span >${characters}.</p>
                                        <p c> <span> Number of Pages : </span> <span >${bknop}.</small></p>
                                   
                            
                        </div>`;

      resultEl.innerHTML += result;
      characters = [];
    })
  } catch (err) {
    console.log(err);
  }
};

book();


