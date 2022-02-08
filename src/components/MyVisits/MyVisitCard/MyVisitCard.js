import {Link} from 'react-router-dom'
const MyVisitCard = ({cave}) => {
    return (
        <li className="my-visit-item">
            <h3 >{cave.name}</h3>
            <p ><i class="fas fa-map-marker-alt"></i>{cave.location}</p>
            <img src={cave.imageUrl} />
            <Link className="button" to={`/details/${cave._id}`}>Details</Link>
        </li>
    )
}
export default MyVisitCard