const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) 
    //   ||
    //   user.i.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://www.anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(data => {
    users = data.map(i => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      
     
      header.textContent = i.name;
      body.textContent = i.isbn; 
    //   body1.textContent = i.numberOfPages;
    //   body2.textContent = i.authors[0];
    //   body.textContent= i.publisher;
    //   body.textContent= i.released;
      
      userCardContainer.append(card)
      return { name: i.name, isbn: i.isbn, element: card }
    })
  })