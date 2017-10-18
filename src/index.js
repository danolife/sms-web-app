import React from 'react';
import ReactDOM from 'react-dom';
import './app.global.scss';
import { AppContainer } from 'react-hot-loader';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root'),
    )
};

render(App);
registerServiceWorker();

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App/App', () => { render(App) })
}
