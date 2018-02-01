import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { Button } from '@ciro-maciel/style-guide';

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


storiesOf('Component', module).add('Button', withInfo("String or React Element with docs about my component")(() => story()));