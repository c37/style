import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, font } from '../variables';

import ListItem from "./list-item";


const Container = styled.ul`
    font-family: ${font.family};
    font-size: ${font.size.normal};
    color: ${font.color.normal};
    list-style: none;
    padding: 0;
    ${props => props.orientation === 'horizontal' && `
        display: flex;
        align-items: center;
        justify-content: space-between;
    `}
`;

const ORIENTATION = {
    vertical: 'vertical',
    horizontal: 'horizontal'
}

const APPEARANCE = {
    styled: 'styled',
    unstyled: 'unstyled'
}

export default class List extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        orientation: PropTypes.oneOf(Object.keys(ORIENTATION)).isRequired,
        appearance: PropTypes.oneOf(Object.keys(APPEARANCE)).isRequired
    };

    static defaultProps = {
        orientation: ORIENTATION.vertical,
        appearance: APPEARANCE.styled
    }

    render() {

        const { children, orientation, appearance } = this.props;

        const items = React.Children.map(children, (child, i) => {
            return React.cloneElement(child, {
                orientation,
                appearance
            })
        })

        return (
            <Container {...this.props}>
                {items}
            </Container>
        );
    }
}

List.orientation = ORIENTATION;
List.appearance = APPEARANCE;
List.Item = ListItem;