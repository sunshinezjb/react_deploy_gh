const Footer = ({ length }) => {
    return (
        <footer>
            <p>{length} List {length === 1 ? "item" : "items"}--888</p>
        </footer>
    )
}

export default Footer
