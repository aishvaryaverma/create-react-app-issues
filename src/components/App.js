// redux
import { Provider } from 'react-redux';
import store from '../redux/store';
// components
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
// statics
import 'react-toastify/dist/ReactToastify.css';
import '../static/scss/main.scss';

function App() {
	return (
		<Provider store={store}>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				closeOnClick
			/>
			<Home />
		</Provider>
	);
}

export default App
