import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { Provider } from 'react-redux'
import './styles.css'
// import store from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//     <Provider store={store}>
        <App />
//     </Provider>
)