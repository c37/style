import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


const story = () => (
    <div>header</div>
);


storiesOf('Layout', module).add('Header', story);