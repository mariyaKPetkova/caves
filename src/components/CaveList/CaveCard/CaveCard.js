import {Link} from 'react-router-dom'
const CaveCard = ({cave}) => {
    return (
        <li className="item">
            <h3>Name: {cave.name}</h3>
            <p>Type: {cave.type}</p>
            <p className="img"><img src={cave.imageUrl} /></p>
            <Link className="button" to={`/details/${cave._id}`}>Details</Link>
        </li>
    )
}
export default CaveCard