import BookCard from "./bookcard.jsx"

export default function SearchResults({ books }){
return(
    <article>
        <h2>Resultater</h2>
            {books.map((book) => (
                <BookCard key={book.key} book={book}/>
            ))}
    </article>
)
}