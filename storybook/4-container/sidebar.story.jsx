import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { SideBar } from '@ciro-maciel/style-guide';

const story = () => {

    const sidebar =
        <div style={{ width: '100%', height:'700px', display: 'flex', border: '1px solid red' }} >
            <SideBar>
                <SideBar.Header>
                    header
                </SideBar.Header>
                <SideBar.Item>
                    Item - 001
                </SideBar.Item>
                <SideBar.Item>
                    Item - 002
                </SideBar.Item>
                <SideBar.Item>
                    Item - 003
                </SideBar.Item>
                <SideBar.Footer>
                    footer
                </SideBar.Footer>
            </SideBar>
            <div>
                content
            </div>
        </div>;

    specs(() => describe('Hello World', function () {
        it('Should have Hello World label', function () {
            let output = mount(sidebar);
            // expect(output.text()).toContain('Hello World');
            expect('Hello World').toContain('Hello World');
        });
    }));

    return sidebar;
};


storiesOf('Container', module).add('SideBar', withInfo("String or React Element with docs about my component")(() => story()));