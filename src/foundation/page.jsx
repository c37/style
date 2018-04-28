// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Flex, Box } from 'grid-styled';

import { page } from '../variables';


const SIZE = {
    full: 'full',
    large: 'large',
    big: 'big',
    medium: 'medium',
    small: 'small',
    smaller: 'smaller'
}

export default class Page extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        size: PropTypes.oneOf(Object.keys(SIZE)).isRequired,
    };

    static defaultProps = {
        size: SIZE.full
    }

    render() {

        const { children, size } = this.props;
        let content;

        switch (size) {
            case SIZE.large:
                content =
                    <Flex {...this.props} width={page.size.large} style={{margin:'auto'}}>
                        {children}
                    </Flex>;
                break;
            case SIZE.big:
                content =
                    <Flex {...this.props} width={page.size.big} style={{margin:'auto'}}>
                        {children}
                    </Flex>;
                break;
            case SIZE.medium:
                content =
                    <Flex  {...this.props} width={page.size.medium} style={{margin:'auto'}}>
                        {children}
                    </Flex>;
                break;
            case SIZE.small:
                content =
                    <Flex {...this.props} width={page.size.small} style={{margin:'auto'}}>
                        {children}
                    </Flex>;
                break;
            case SIZE.smaller:
                content =
                    <Flex {...this.props} width={page.size.smaller} style={{margin:'auto'}}>
                        {children}
                    </Flex>;
                break;
            default: // full
                content =
                    <Flex {...this.props} style={{ height: '100%', width: '100%', flexDirection: 'column' }}>
                        {children}
                    </Flex>;
                break;
        }

        return content;
    }
}

Page.size = SIZE;