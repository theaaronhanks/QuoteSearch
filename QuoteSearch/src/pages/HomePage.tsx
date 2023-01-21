import { useEffect, useState } from "react";
import { QuoteBox } from "../components/QuoteBox";

export function HomePage() {
    const [quote, setQuote] = useState("Searching for quote...")
    const [author, setAuthor] = useState("");

    useEffect(() => {
        fetch("https://api.quotable.io/random")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setQuote(data.content);
            if (data.author === "") {
                setAuthor("- Unknown");
            } else {
                setAuthor("- " + data.author);
            }
        })
        .catch(error => {
            setQuote("Unable to find quotes. Please try again");
        })
    }, [])

    return (
        <div>
            <h4>Here's a free quote!</h4>
            <QuoteBox quote={quote} author={author}/>
        </div>
    )
}