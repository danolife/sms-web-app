import React from 'react';
import ReactDOM from 'react-dom';
import './app.global.scss';
import App from './components/App/App';

const MOUNT_NODE = document.getElementById('root');
const render = Component => {
    ReactDOM.render(
        <Component />,
        MOUNT_NODE,
    )
};

render(App);
registerServiceWorker();

if (module.hot) {
    // Hot reloadable React components and translation json files
    // modules.hot.accept does not accept dynamic dependencies,
    // have to be constants at compile-time
    module.hot.accept(['./components/App/App'], () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render(App);
    });
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
