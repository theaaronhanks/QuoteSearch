import { useState } from 'react'
import { HomePage } from './pages/HomePage'
import { SearchPage } from './pages/SearchPage'
import SearchIcon from '@mui/icons-material/Search';


export function App() {
    const [pageName, setPageName] = useState("home");
    const [searchContent, setSearchContent] = useState("");
    const [searchCriteria, setSearchCriteria] = useState("");

    function search(event: React.FormEvent<HTMLFormElement>) {
        console.log("I was called!");
        setPageName("search");
        setSearchCriteria(searchContent);
        event.preventDefault();
    }

    return (
        <div className={pageName}>
            <h2>Quote Search!</h2>  
            <div className="search-bar">
                <form onSubmit={search}>
                    <span className='icon'>
                        <SearchIcon/>
                    </span>
                    <input 
                        type="text" 
                        value={searchContent} 
                        placeholder="Famous person"
                        onChange={e => setSearchContent(e.target.value)}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>

            {pageName === "home" && <HomePage/>}
            {pageName === "search" && <SearchPage content={searchCriteria}/>}
        </div>
    )
}
