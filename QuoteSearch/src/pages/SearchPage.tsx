import { QuoteBox } from "../components/QuoteBox";
import { SearchBar } from "../components/SearchBar";

export function SearchPage() {

    return (
        <div>
            <div>Hello</div>
            <SearchBar/>
            <QuoteBox quote="testing the quote and stuff" author="Bob"/>
            <QuoteBox quote="testing the quote and stuff" author="Joe"/>
            <QuoteBox quote="I made a quote box!" author="Aaron"/>
        </div>
    )
}