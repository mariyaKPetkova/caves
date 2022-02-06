import {Link} from 'react-router-dom'
const NewsCard = ({news}) => {
    return (
        <li className="li-news">
            <img src={news.img} />
            <div>
            <h3 >{news.name}</h3>
            <p>{news.description}</p>
            <Link className="li-btn" to={`/detailsNews/${news._id}`}>Learn more</Link>
            </div>
            
        </li>
    )
}
export default NewsCard