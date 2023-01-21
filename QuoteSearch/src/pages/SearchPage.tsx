import { useEffect, useState } from "react";
import { QuoteBox } from "../components/QuoteBox";

let ID_COUNT = 0;

interface SearchPageProps {
    content: string;
}

interface Quote {
    id: number;
    content: string;
    author: string;
}

export function SearchPage({content}: SearchPageProps) {
    const [quotes, setQuotes] = useState<Quote[]>([{id:0, content: "Searching for quote...", author: ""}]);

    useEffect(() => {
        let quotesList: Array<Quote> = [];

        fetch("https://api.quotable.io/busted")
        .then(resp => resp.json())
        .then(data => {
            // let results = data.results;
            let results = [{"_id":"ut3otm", content:"You'll see it when you believe it.", author:"Wayne Dyer","authorSlug":"Wayne Dyer","length":34,"tags":[]}, {"_id":"-17rh9lt","content":"Never put off till tomorrow what you can do today.","author":"Thomas Jefferson","authorSlug":"Thomas Jefferson","length":50,"tags":[]}]
            
            for (let result of results) {
                console.log(result);
                const quote = {
                    id: ID_COUNT++,
                    content: result.content,
                    author: result.author
                }
                quotesList.push(quote);
                console.log(quotesList);
            }
            setQuotes(quotesList);
        })
        .catch(error => {
            const quote = {
                id: ID_COUNT++,
                content: "Unable to find quotes. Please try again",
                author: ""
            }
            quotesList.push(quote);
            setQuotes(quotesList);
        })

    }, [])

    return (
        <div>
            {
                quotes.map((quote) => (
                    <div key={quote.id}>
                        <QuoteBox quote={quote.content} author={quote.author}/>
                    </div>
                ))
            }
        </div>
    )
}