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

    function addMovie(e) {
        e.preventDefault()
        let movie = {
            id: Math.random().toString(),
            title: title,
            openingText: openingText,
            releaseDate: releaseDate
        }
        console.log(movie)
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