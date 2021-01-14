import React ,{ useState , useEffect} from "react";
import axios from 'axios';


const Search = () => {
    const [term , setTerm] = useState('programming');
    const [results, setResults] = useState([ ]);
    console.log('I RUN WITH EVERY RENDER');
    useEffect(() => {// we can't declare async keyword directly to useEffect
        const search = async () => {
        //or (async()=>{await axios.get('shimmo');})();
        const { data }
            = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        };
        if (term && !results.length){
            search();
        }else{
            const timeoutId = setTimeout(() =>{
                if(term){
                    search();
                }
            } ,1000);
            return() => {
                clearTimeout(timeoutId);
            };
            
        }
       
    }, [term]);
    const renderedResults = results.map((results) =>{
        return (
        <div key={results.pageid} className="item">
            <div className="right floated content">
                <a className="ui button">Go</a>
            </div>
            <div className="content">
                <div className="header" href={`https://en.wikipedia.org?curid=${results.pageid}`}>
                    {results.title}
                </div>
                <span dangerouslySetInnerHTML = {{__html: results.snippet}}>
                </span>
            </div>
        </div>)
    });
    return (
        <div >
            <div className="ui form">
                <div className="field">
                    <label>Enter Search</label>
                    <input className="input" type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};
export default Search;