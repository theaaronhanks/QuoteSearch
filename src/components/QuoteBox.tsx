interface QuoteBoxProps {
    quote: string;
    author: string;
}

export function QuoteBox({ quote, author }: QuoteBoxProps) {
    return (
        <div className="quote-box">
            <p>
                {quote}
            </p>
            <p className="author">
                {author}
            </p>
        </div>
    );
}