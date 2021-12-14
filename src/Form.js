import { useState } from "react";


const Form = () => {
    const [search, setSearch] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        alert(search)
    }

    return(
        <div style={{textAlign : 'center'}}>
            <form onSubmit={handleSubmit}>


                <input type='text' value={search} onChange={(e) => setSearch(e.target.value) } />

                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )

}

export default Form