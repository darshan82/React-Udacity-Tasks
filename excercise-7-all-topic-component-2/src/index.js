import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Return from './return';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Return />, document.getElementById('root'));
if(module.hot){
    module.hot.accept
}
registerServiceWorker();
