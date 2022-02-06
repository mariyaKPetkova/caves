import { Routes, Route } from 'react-router-dom'

import NewsList from '../NewsList/NewsList.js'

const News = () => {
    return (
        <section id="news">
            
            <article className="news-items">
                <Routes>
                    <Route path="/" element={<NewsList />} />
                </Routes>
            </article>

        </section>
    )
}
export default News