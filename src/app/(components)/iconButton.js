export default function IconButton ({ icon, onClick, className }) {
    
    return (
        <button className={`${className} rounded-md drop-shadow-lg`} onClick={onClick}> { icon } </button>
    )
}