// Add option to set the main document title #812 - https://github.com/storybooks/storybook/issues/812


import React from 'react';
import {
    configure,
    addDecorator
} from '@storybook/react';
import {
    setOptions
} from '@storybook/addon-options';

// https://storybook.js.org/configurations/default-config/#css-support
import './style.css';


import { configure as config } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

config({ adapter: new Adapter() });


// https://github.com/storybooks/storybook/tree/master/addons/info#global-options
import { setDefaults } from '@storybook/addon-info';
// addon-info
setDefaults({
    header: true, // Toggles display of header with component name and description
    inline: true, // Displays info inline vs click button to view
    source: true, // Displays the source of story Component
    propTables: [/* Components used in story */], // displays Prop Tables with this components
    propTablesExclude: [], // Exclude Components from being shown in Prop Tables section
    styles: stylesheet => {
        // console.log(stylesheet);
        stylesheet.infoBody.marginTop = 0;
        stylesheet.header.body.marginBottom = 0;
        
        stylesheet.infoStory.padding = '20px';
        stylesheet.infoStory.display = 'flex';
        stylesheet.infoStory.alignItems = 'center';
        stylesheet.infoStory.justifyContent = 'space-evenly';
        stylesheet.infoStory.flexWrap = 'wrap';

        return stylesheet;
    }, // Overrides styles of addon
    marksyConf: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
    maxPropsIntoLine: 1, // Max props to display per line in source code
    maxPropObjectKeys: 10,
    maxPropArrayLength: 10,
    maxPropStringLength: 100,
});



const context = require.context('../', true, /.story\.js|jsx$/);

addDecorator(story => (
    // <div style={{ textAlign: 'left' }}>
    <div style={{padding: 0}}>
        {story()}
    </div>
));

// https://github.com/storybooks/storybook/tree/master/addons/options
setOptions({
    name: 'Style Guide',
    url: 'https://github.com/ciro-maciel/style-guide',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: true,
    sortStoriesByKind: false,
    sidebarAnimations: true,
    // hierarchySeparator: /\/|\./,
    // hierarchyRootSeparator: /\|/,
    selectedAddonPanel: undefined
});

function loadStories() {
    context.keys().forEach(context);
}

configure(loadStories, module);