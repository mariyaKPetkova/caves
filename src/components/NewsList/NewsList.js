import { useEffect,useState } from "react"
import * as newsService from '../../services/newsService.js'
import NewsCard from "./NewsCard/NewsCard.js"

const NewsList = () => {
    
    const [news,setNews] = useState([])
    useEffect(()=>{
        newsService
    .getAll()
        .then(result=>{
            
            setNews(result)
        })
    },[])
    return (
        <>
        {news.length >0
        ?<ul className="list-news">
                {news.map(x => <NewsCard key={x._id} news={x} />)}
            </ul>
        :<p className="no-item">No items in database!</p>
        } 
        </>
    )
}
export default NewsList