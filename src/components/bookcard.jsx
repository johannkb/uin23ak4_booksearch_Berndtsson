export default function BookCard({ book }){
    const isbn = book.isbn && book.isbn[0] ? book.isbn[0] : null

    return(
        <ul className="book-list">
            <li key={book.key} className="book-item">
                <h3>{book.title}</h3>
                <p>Publisert førstegang: {book.first_publish_year}</p>
                <p>Forfattere: {book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
                <p>Gjennomsnittlig rangering: {book.average_rating || 'N/A'}</p>
                <a href={`https://www.amazon.com/s?k=${isbn}`}>Sjekk boken på Amazon</a>
                <img src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`} alt={book.title} className="photo"/>
            </li>
        </ul>
    )
}