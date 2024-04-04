import React, { useState, useEffect } from "react"
import SearchResults from "./searchresults"

export default function Layout() {
    const [searchBook, setSearchBook] = useState('James Bond')
    const [books, setBooks] = useState([])

    const handleSearch = async () => {
        try {
            if (searchBook.length >= 4) {
                const response = await fetch(`https://openlibrary.org/search.json?q=${searchBook}`)
                const data = await response.json()
                setBooks(data.docs)
            } else {
                setBooks([])
            }
        } catch(error) {
            console.error('Det har oppstått en feil ved API i layout')
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        handleSearch()
    }

    return(
        <main>
            <h1>Boksøk via OpenLibrary API</h1>
            <form onSubmit={handleSearchSubmit} className="inputbtnform">
                <input type="text" value={searchBook} onChange={(e) => setSearchBook(e.target.value)} placeholder="Søk etter bøker her.." className="input"/>
                <button type="submit" className="btn">Søk</button>
            </form>
            <SearchResults books={books}/>
        </main>
    )
}
