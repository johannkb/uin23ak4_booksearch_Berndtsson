import { useEffect, useState } from "react"
import BookCard from "./bookcard"

export default function SearchBar({}){
const AmazonSearchUrl = 'https://www.amazon.com/s?k='
const [searchTerm, setSearchTerm] = useState('')
const [books, setBooks] = useState([])

const bookSearch = async () => {
  try{
  const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`)
  const data = await response.json()
  setBooks(data.docs)
  console.log(data)
}catch{
  console.error("En feil har oppstått")
}  
}
const bookInputfield = (event) =>{
  setSearchTerm(event.target.value)
}


return(
  <main>
    <h1>Boksøk via OpenLibrary</h1>
    <input 
      type="text"
      value={searchTerm}
      onChange={bookInputfield}
      placeholder='Søk etter bøker..'
    />
    <button onClick={bookSearch}>Søk</button>
    <h2>Resultater</h2>
    <BookCard />
  </main>
)
}