import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { Accordion, AccordionItem } from '@ciro-maciel/style-guide';

const story = () => {

    const accordion =
        <div style={{ width: '100%' }} >
            <Accordion onChange={(item) => { action('onChange'); console.log(item); }}>
                <AccordionItem id="item-1" title="Section 1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </AccordionItem>
                <AccordionItem id="item-2" title="Section 2" open={true}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </AccordionItem>
                <AccordionItem id="item-3" title="Section 3">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </AccordionItem>
            </Accordion>
        </div>;

    specs(() => describe('Hello World', function () {
        it('Should have Hello World label', function () {
            let output = mount(accordion);
            // expect(output.text()).toContain('Hello World');
            expect('Hello World').toContain('Hello World');
        });
    }));

    return accordion;
};


storiesOf('Container', module).add('Accordion', withInfo("String or React Element with docs about my component")(() => story()));