export default function IconButton ({ icon, onClick, className, id }) {
    
    return (
        <button id={id} className={`${className} rounded-md drop-shadow-lg`} onClick={onClick}> { icon } </button>
    )
}