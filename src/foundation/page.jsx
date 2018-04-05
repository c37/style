import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Flex, Box } from 'grid-styled';

import { color, font } from '../variables';


const SIZE = {
    full: 'full',
    big: 'big',
    medium: 'medium',
    small: 'small'
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
            case SIZE.big:
                content =
                    <Flex {...this.props} wrap width={960}>
                        {children}
                    </Flex>;
                break;
            case SIZE.medium:
                content =
                    <Flex  {...this.props} wrap width={768}>
                        {children}
                    </Flex>;
                break;
            case SIZE.small:
                content =
                    <Flex  {...this.props} wrap width={576}>
                        {children}
                    </Flex>;
                break;
            default:
                content =
                    <Flex {...this.props} wrap justify='center' style={{ height: '100%', width: '100%' }}>
                        {children}
                    </Flex>;
                break;
        }

        return content;
    }
}

Page.size = SIZE;