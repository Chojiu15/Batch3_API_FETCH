
// We receive props coming from the App component, the Card component is here to display props only
const Card = ({name, email}) => {
    return(
        <>
                <h1>{name}</h1>
                <p>{email}</p>
        </>
    )
}

export default Card