import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { font, heading } from '../variables';


export const Title = styled.h1`
    font-family: ${font.family};
    color: ${font.color.heading};
    font-size: ${heading.title.size};
    line-height: ${heading.title.lineHeight};
    margin-top: ${heading.title.marginTop};
    margin-bottom: ${heading.marginBottom};
`;

export const H1 = styled.h1`
    font-family: ${font.family};
    color: ${font.color.heading};
    font-size: ${heading.h1.size};
    line-height: ${heading.h1.lineHeight};
    margin-top: ${heading.h1.marginTop};
    margin-bottom: ${heading.marginBottom};
`;

export const H2 = styled.h2`
    font-family: ${font.family};
    color: ${font.color.heading};
    font-size: ${heading.h2.size};
    line-height: ${heading.h2.lineHeight};
    margin-top: ${heading.h2.marginTop};
    margin-bottom: ${heading.marginBottom};
`;

export const H3 = styled.h3`
    font-family: ${font.family};
    color: ${font.color.heading};
    font-size: ${heading.h3.size};
    line-height: ${heading.h3.lineHeight};
    margin-top: ${heading.h3.marginTop};
    margin-bottom: ${heading.marginBottom};
`;

export const H4 = styled.h4`
    font-family: ${font.family};
    color: ${font.color.heading};
    font-size: ${heading.h4.size};
    line-height: ${heading.h4.lineHeight};
    margin-top: ${heading.h4.marginTop};
    margin-bottom: ${heading.marginBottom};
`;

export const H5 = styled.h5`
    font-family: ${font.family};
    color: ${font.color.heading};
    font-size: ${heading.h5.size};
    line-height: ${heading.h5.lineHeight};
    margin-top: ${heading.h5.marginTop};
    margin-bottom: ${heading.marginBottom};
`;

export const Blockquote = styled.blockquote`
    font-family: ${font.family};
    color: ${font.color.normal};
    font-size: ${font.size.normal};
    margin:0;
    display: block;
    padding-left: 1rem;
    border-left: 4px solid rgba(0, 0, 0, .1);
    font-style: italic;
    & > p {
        margin-bottom: 0;
    }
`;



export const ContainerP = styled.p`
    font-family: ${font.family};
    color: ${font.color.normal};
    display: block;
    ${props => props.size === SIZE_P.large && `font-size: ${font.size.large};`}
    ${props => props.size === SIZE_P.big && `font-size: ${font.size.big};`}
    ${props => props.size === SIZE_P.normal && `font-size: ${font.size.normal};`}
    ${props => props.size === SIZE_P.small && `font-size: ${font.size.small};`}
    ${props => props.size === SIZE_P.smaller && `font-size: ${font.size.smaller};`}    
`;

const SIZE_P = {
    large: 'large',
    big: 'big',
    normal: 'normal',
    small: 'small',
    smaller: 'smaller'
}

export class P extends PureComponent {
    static propTypes = {
        size: PropTypes.oneOf(Object.keys(SIZE_P)).isRequired
    };

    static defaultProps = {
        size: SIZE_P.normal
    }

    render() {

        const { children } = this.props;

        return (
            <ContainerP {...this.props}>
                {children}
            </ContainerP>
        );
    }
}

P.size = SIZE_P;
