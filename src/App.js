import { Routes,Route} from 'react-router-dom'

import Header from './components/Header/Header.js';
import Create from './components/Create/Create.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Details from './components/Details/Details.js'
import Edit from './components/Edit/Edit.js'
import Login from './components/Login/Login.js'
import MyVisits from './components/MyVisits/MyVisits.js'
import Register from './components/Register/Register.js'

function App() {
  return (
    <div id="container">
      <Header />
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/my-visits" element={<MyVisits/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/details/:caveId" element={<Details/>} />
        </Routes>

      </main>

      <footer id="site-footer">
        <p>My App</p>
      </footer>

    </div>
  );
}

export default App;
