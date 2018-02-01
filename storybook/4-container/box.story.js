import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


const story = () => (
    <div>box</div>
);


storiesOf('Container', module).add('Box', story);