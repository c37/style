import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';



// require('offline-plugin/runtime').install();
utility.net.info.load();
// https://github.com/hoodsy/3ree-auth-example/blob/master/common/views/routes.js

const Main = () => (
    <div>
        <pre>
            style - react
        </pre>
    </div>
);

render(<Main />, document.getElementById('container'));