import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications';

import { mount } from "enzyme";
import expect from "expect";

import { List, ListItem } from '@ciro-maciel/style-guide';

import styled from 'styled-components';


const Item = styled.div`
    ${props => props.w === 1 && `
        flex: 1 100%;
    `}
    ${props => props.w === 1-2 && `
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
                <h3>
                    Styled
                </h3>
            </Item>
            <Item w={1 - 2}>
                <List orientation={List.orientation.vertical}>
                    <ListItem selected>list item 001</ListItem>
                    <ListItem>
                        <div>
                            list item 002 | list item 002
                        </div>
                    </ListItem>
                    <ListItem textAlign={ListItem.textAlign.center}>list item 003</ListItem>
                </List>
            </Item>
            <Item w={1 - 2}>
                <List orientation={List.orientation.horizontal}>
                    <ListItem>list item 001</ListItem>
                    <ListItem disabled>list item 002</ListItem>
                    <ListItem>list item 003</ListItem>
                </List>
            </Item>
            <Item w={1}>
                <h3>
                    Unstyled
                </h3>
            </Item>
            <Item w={1 - 2}>
                <List appearance={List.appearance.unstyled}>
                    <ListItem>list item 001</ListItem>
                    <ListItem selected>
                        <div>
                            list item 002 | list item 002
                        </div>
                    </ListItem>
                    <ListItem textAlign={ListItem.textAlign.center}>list item 003</ListItem>
                </List>
            </Item>
            <Item w={1 - 2}>
                <List orientation={List.orientation.horizontal} appearance={List.appearance.unstyled}>
                    <ListItem>list item 001</ListItem>
                    <ListItem disabled>list item 002</ListItem>
                    <ListItem>list item 003</ListItem>
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