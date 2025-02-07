import './App.css'

//COMPONENTS
import Sidebar from './layouts/sidebar/Sidebar'
import Content from './layouts/contents/Content'

function App() {
  return (
    <div className='app'>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default App
