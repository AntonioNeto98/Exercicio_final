import { BrowserRouter, Route, Routes } from 'react-router-dom'


import { GlobalCss } from './styles';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import { Provider } from 'react-redux';
import { store } from './store';
import Checkout from './pages/Checkout';


const Rotas = () => (
  <Routes>
    <Route path='/' element= {<Home />} />
    <Route path='/cardapio' element= {<Cardapio />} />
    <Route path='/checkout' element= {<Checkout/>} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      < GlobalCss />
      <Rotas />
    </BrowserRouter>
    </Provider>
    
  )
}

export default App;
