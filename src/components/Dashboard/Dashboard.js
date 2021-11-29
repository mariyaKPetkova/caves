import { Routes, Route } from 'react-router-dom'

import CaveList from '../CaveList/CaveList.js'

const Dashboard = () => {
    return (
        <section id="catalog" className="catalog">
            <h1>All Caves</h1>
            <section>
                <Routes>
                    <Route path="/" element={<CaveList />} />
                </Routes>
            </section>

        </section>
    )
}
export default Dashboard