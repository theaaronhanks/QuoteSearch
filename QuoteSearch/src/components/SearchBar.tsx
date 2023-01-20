import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

interface SearchBarProps {
    content?: string;
}

export function SearchBar({content=""}: SearchBarProps) {
    const [searchContent, setSearchContent] = useState("")

    return (
        <div className="search-bar">
            <span className='icon'>
                <SearchIcon/>
            </span>
            <input type="text" onChange={e => setSearchContent(e.target.value)}/>
            <button>Search</button>
        </div>
    );
}