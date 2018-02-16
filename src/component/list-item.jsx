import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, font, padding } from '../variables';


const Container = styled.li`
    padding: ${padding.normal};
    &:hover {
        color: ${font.color.hover};
        cursor: pointer;
    }

    ${props => props.textAlign === 'left' && `
        text-align: left;
    `}
    ${props => props.textAlign === 'center' && `
        text-align: center;
    `}
    ${props => props.textAlign === 'right' && `
        text-align: right;
    `}
    
    ${props => props.appearance === 'styled' && `
        &:hover {
            background-color: ${color.hover};
        }
    `}
    ${props => props.appearance === 'styled' && props.orientation === 'horizontal' && `
        border-right: 1px solid ${color.border};
        &:last-child {
            border-right: none;
        }
    `}
    ${props => props.appearance === 'styled' && props.orientation === 'vertical' && `
        border-bottom: 1px solid ${color.border};
        &:last-child {
            border-bottom: none;
        }
    `}

    ${props => props.appearance === 'styled' && props.selected && `
        background-color: ${color.selected};
        &:hover {
            color: ${font.color.normal};
            cursor: default;
        }
    `}
    ${props => props.appearance === 'styled' && props.disabled && `
        background-color: ${color.disabled};
        opacity: .5;
        &:hover {
            color: ${font.color.normal};
            cursor: default;
        }
    `}

    ${props => props.appearance === 'unstyled' && props.selected && `
        font-weight: 500;
        &:hover {
            color: ${font.color.normal};
            cursor: default;
        }
    `}
    ${props => props.appearance === 'unstyled' && props.disabled && `
        opacity: .5;
        &:hover {
            color: ${font.color.normal};
            cursor: default;
        }
    `}
    
`;

const TEXT_ALIGN = {
    left: 'left',
    center: 'center',
    right: 'right'
}

export default class Item extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        textAlign: PropTypes.oneOf(Object.keys(TEXT_ALIGN)).isRequired,
        selected: PropTypes.bool.isRequired,
        disabled: PropTypes.bool.isRequired
    };

    static defaultProps = {
        textAlign: TEXT_ALIGN.left,
        selected: false,
        disabled: false
    }

    render() {

        const { children } = this.props;

        return (
            <Container {...this.props}>
                {children}
            </Container>
        );
    }
}

Item.textAlign = TEXT_ALIGN;