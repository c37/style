import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { specs, describe, it } from 'storybook-addon-specifications';

import { Button } from 'react-style-boilerplate';
// import Doc from './doc.md';

import { mount } from "enzyme";
import expect from "expect";


const story = () => {
    const button = 
        <div>
            <Button onClick={action('clicked')}>Hello World</Button>
            &nbsp;
            <Button  primary>Hello World</Button>
        </div>;

    specs(() => describe('Hello World', function () {
        it('Should have Hello World label', function () {
        let output = mount(button);
        expect(output.text()).toContain('Hello World');
        });
    }));

    return button;
};


storiesOf('Component', module).add('Button',
    withInfo({
        text: 'String or React Element with docs about my component',
        summary: (<div>custom JSX structure</div>),        
    })(() => story() ));