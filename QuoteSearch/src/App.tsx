import { useState } from 'react'
import { HomePage } from './pages/HomePage'
import { SearchPage } from './pages/SearchPage'
import SearchIcon from '@mui/icons-material/Search';


export function App() {
    const [pageName, setPageName] = useState("home");
    const [searchContent, setSearchContent] = useState("")

    function search() {
        setPageName("search")
    }

    return (
        <div className='home'>
            <h2>Quote Search!</h2>  
            <div className="search-bar">
                <form>
                    <span className='icon'>
                        <SearchIcon/>
                    </span>
                    <input 
                        type="text" 
                        value={searchContent} 
                        placeholder="Famous person"
                        onChange={e => setSearchContent(e.target.value)}
                        onSubmit={e => {setPageName("search"); e.preventDefault(); }}
                    />
                    <button onClick={() => search()}>Search</button>
                </form>
            </div>

            {pageName === "home" && <HomePage/>}
            {pageName === "search" && <SearchPage content={searchContent}/>}
        </div>
    )
}
