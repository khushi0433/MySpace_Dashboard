import { useState, useEffect } from "react";

export default function QuoteGenerator() {
    const [quote, setQuote] = useState({ text: '', author: '' });
    const [loading, setLoading] = useState(false);

    const fetchQuote = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
          headers: {
            "X-Api-Key": "N72FLfhqo9uuqDngUylZvw==EU0FQ96T8PnHrVNV",
          },
        });
        const data = await res.json();
        const first = data[0];
        setQuote({
          text: first.quote,
          author: first.author,
        });
      } catch (err) {
        console.error("Error fetching quote:", err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchQuote();
    }, []);  
    
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Inspirational Quote</h2>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p>Loading quote...</p>
            <>
              <p className="text-gray-800 text-lg italic">{quote.text}</p>
              <p className="text-right text-gray-600 mt-2">{quote.author}</p>
            </>
        </div>
        <button 
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors w-full"
          onClick={fetchQuote}
          disabled={loading}
        >
          { loading ? "fetcing" : "Get New quote" }
        </button>
      </div>
    );
  }