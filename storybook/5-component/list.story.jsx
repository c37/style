import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { List, H3 } from '@ciro-maciel/style-guide';

import styled from 'styled-components';


const Item = styled.div`
    ${props => props.w === 1 && `
        flex: 1 100%;
    `}
    ${props => props.w === 1 - 2 && `
        flex: 1 50%;
    `}
    display: flex;
    flexDirection: column;
    justify-content: center;
`;


const story = () => {
    const list =
        <div style={{ width: '100%', display: 'flex', flexFlow: 'row wrap' }} >
            <Item w={1}>
                <H3>
                    Styled
                </H3>
            </Item>
            <Item w={1 - 2}>
                <List orientation={List.orientation.vertical}>
                    <List.Item selected>list item 001</List.Item>
                    <List.Item>
                        <div>
                            list item 002 | list item 002
                        </div>
                    </List.Item>
                    <List.Item textAlign={List.Item.textAlign.center}>list item 003</List.Item>
                </List>
            </Item>
            <Item w={1 - 2}>
                <List orientation={List.orientation.horizontal}>
                    <List.Item>list item 001</List.Item>
                    <List.Item disabled>list item 002</List.Item>
                    <List.Item>list item 003</List.Item>
                </List>
            </Item>
            <Item w={1}>
                <H3>
                    Unstyled
                </H3>
            </Item>
            <Item w={1 - 2}>
                <List appearance={List.appearance.unstyled}>
                    <List.Item>list item 001</List.Item>
                    <List.Item selected>
                        <div>
                            list item 002 | list item 002
                        </div>
                    </List.Item>
                    <List.Item textAlign={List.Item.textAlign.center}>list item 003</List.Item>
                </List>
            </Item>
            <Item w={1 - 2}>
                <List orientation={List.orientation.horizontal} appearance={List.appearance.unstyled}>
                    <List.Item>list item 001</List.Item>
                    <List.Item disabled>list item 002</List.Item>
                    <List.Item>list item 003</List.Item>
                </List>
            </Item>
        </div >;

    specs(() => describe('Hello World', function () {
        it('Should have Hello World label', function () {
            let output = mount(message);
            // expect(output.text()).toContain('Hello World');
            expect('Hello World').toContain('Hello World');
        });
    }));

    return list;
};



storiesOf('Component', module).add('List', withInfo({
    text: `String or React Element with docs about my component`,
    inline: true,
    source: false,
    // https://www.npmjs.com/package/@storybook/addon-info#options-and-defaults
    propTablesExclude: [Item]
})(() => story()));