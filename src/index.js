import ReactDOM from 'react-dom';
import routes from './routes'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';
import './theme/globalStyle';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
