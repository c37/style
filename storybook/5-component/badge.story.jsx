import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { Badge } from '@ciro-maciel/style-guide';

import styled from 'styled-components';


// https://ak-mk-2-prod.netlify.com/mk-2/packages/elements/badge
const Item = styled.div`
    font-family: -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
    align-items: center;
    box-align: center;
    font-size: 12px;
    flex-align: center;
    align-items: center;
    display: flex;
    justify-content: space-between;
    justify-content: space-between;
    padding: 0.6em 1em;

    &:hover {
        background-color: #F4F5F7;
    }
`;
// https://ak-mk-2-prod.netlify.com/mk-2/packages/elements/badge


const story = () => {
    const badge =
        <div style={{ width: '100%' }} >
            <Item>
                Default
                <Badge value={5} />
            </Item>
            <Item>
                Primary
                <Badge appearance="primary" value={-5} />
            </Item>
            <Item>
                Primary Inverted
                <Badge appearance="primaryInverted" value={-5} />
            </Item>
            <Item>
                Important
                <Badge appearance="important" value={25} />
            </Item>
            <Item>
                Added (no theme change)
                <Badge appearance="added" max={99} value={3000} />
            </Item>
            <Item>
                Removed (no theme change)
                <Badge appearance="removed" />
            </Item>

            {/* <Badge appearance="primary" value={-5} />
            <Badge appearance="primaryInverted" value={-5} />
            <Badge appearance="important" value={25} />
            <Badge appearance="added" max={99} value={3000} />
            <Badge appearance="removed" /> */}
        </div >;

    specs(() => describe('Hello World', function () {
        it('Should have Hello World label', function () {
            let output = mount(badge);
            expect(output.text()).toContain('Hello World');
        });
    }));

    return badge;
};


storiesOf('Component', module).add('Badge', withInfo("String or React Element with docs about my component")(() => story()));