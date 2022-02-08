import {Link} from 'react-router-dom'
const CaveCard = ({cave}) => {
    return (
        <li className="item">
            <h3 className="cave-name">{cave.name}</h3>
            <p className="cave-location"><i class="fas fa-map-marker-alt"></i>{cave.location}</p>
            <p className="img"><img src={cave.imageUrl} /></p>
            <Link className="button" to={`/details/${cave._id}`}>Details</Link>
        </li>
    )
}
export default CaveCard