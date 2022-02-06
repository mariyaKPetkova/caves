
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import * as newsService from '../../services/newsService.js'

const DetailsNews = () => {
    const [news, setNews] = useState({})
    const { newsId } = useParams()
    useEffect(() => {
        newsService.getOne(newsId)
            .then(result => {

                setNews(result)
            })
    }, [newsId])



    return (
        <section className="details-news">
            <img id="img-news" src={news.img} />
            <div id="info-news">
                <h3>{news.name}</h3>
                <p>{news.description}</p>
            </div>
        </section>
    )
}
export default DetailsNews