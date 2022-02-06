import { Routes, Route } from 'react-router-dom'

import CaveList from '../CaveList/CaveList.js'

const Dashboard = () => {
    return (
        <section id="catalog" className="catalog">
            
            <article className="welcome">
            <div id="transp"></div>
            <p id="descr">Incredible caves are all over the world. Each have they own unique facts, history, looks and location but they are all awesome and astounding in their own ways. What is the most interesting and impressive cave you have visited?<br/> <b>Share Your Favorite Caves in Bulgaria.</b></p>
            </article>
            
            <article className="list-items">
                <Routes>
                    <Route path="/" element={<CaveList />} />
                </Routes>
            </article>

        </section>
    )
}
export default Dashboard