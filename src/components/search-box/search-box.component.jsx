import './search-box.style.css'

export const SearchBox = ({ placeholder, onChange }) => (
    <input
        className="search"
        type="search" 
        placeholder={ placeholder } 
        onChange={onChange} />
)