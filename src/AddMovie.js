import { useState } from "react"

function AddMovie() {
    const [title, setTitle] = useState('')
    const [openingText, setOpeningText] = useState('')
    const [releaseDate, setReleaseDate] = useState('')

    function titleHandler(e) {
        setTitle(e.target.value)
    }
    function openingTextHandler(e) {
        setOpeningText(e.target.value)
    }
    function releaseDateHandler(e) {
        setReleaseDate(e.target.value)
    }

    async function addMovie(e) {
        e.preventDefault()
        let movie = {
            title: title,
            openingText: openingText,
            releaseDate: releaseDate
        }
        const response = await fetch('https://adding-movie-default-rtdb.firebaseio.com/movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }

        })

        const data = await response.json()
        console.log(data)
    }

    return (
        <form onSubmit={addMovie}>
            <label>Title</label>
            <input type='text' onChange={titleHandler} />
            <label>Opening Text</label>
            <input type='text' onChange={openingTextHandler} />
            <label>Relase Date</label>
            <input type='date' onChange={releaseDateHandler} />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddMovie