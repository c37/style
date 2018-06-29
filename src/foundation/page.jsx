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
    // smaller: 'smaller'
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
            case SIZE.full:
                content =
                    <Flex {...this.props} wrap style={{ height: '100%', width: '100%', flexFlow: 'row wrap', alignItems: 'center', justifyContent: 'center' }}>
                        {children}
                    </Flex>;
                break;
            case SIZE.large:
                content =
                    // <Flex {...this.props} wrap width={page.size.large}>
                    <Flex {...this.props} style={{ width: page.size.large }}>
                        {children}
                    </Flex>;
                break;
            case SIZE.big:
                content =
                    <Flex {...this.props} wrap width={page.size.big}>
                        {children}
                    </Flex>;
                break;
            case SIZE.medium:
                content =
                    <Flex  {...this.props} wrap width={page.size.medium}>
                        {children}
                    </Flex>;
                break;
            case SIZE.small:
                content =
                    <Flex {...this.props} wrap width={page.size.small}>
                        {children}
                    </Flex>;
                break;
            // case SIZE.smaller:
            //     content =
            //         <Flex {...this.props} wrap width={page.size.smaller} style={{ flex: -1 }}>
            //             {children}
            //         </Flex>;
            //     break;
            default:
                break;
        }

        return content;
    }
}

Page.size = SIZE;