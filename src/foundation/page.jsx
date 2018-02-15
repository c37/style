import React, { PureComponent } from 'react';
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

// export default Page = props => (
//     <Flex
//       {...props}
//       mx={-3}
//     />
//   )



export default class Page extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        size: PropTypes.oneOf(Object.keys(SIZE)).isRequired,
    };

    static defaultProps = {
        size: SIZE.big
    }

    render() {

        const { children, size } = this.props;
        let content = 
            <Flex {...this.props} justify='center' style={{ height: '100%' }}>
                {children}
            </Flex>


        // if (size === SIZE.full) {
        //     content =
        //         <Flex {...this.props} justify='center' style={{ height: '100%' }}>
        //             {children}
        //         </Flex>
        // } else {
        //     content =
        //         <Flex {...this.props} justify='center' style={{ height: '100%' }}>
        //             {children}
        //         </Flex>
        // }

        //     <Flex {...this.props} justify='center' style={{ height: '100%' }}>
        //     (size === SIZE.big) &&
        // <Flex wrap width={960}>
        //         {children}
        //     </Flex>
        //     (size === SIZE.medium) &&
        // <Flex wrap width={768}>
        //         {children}
        //     </Flex>
        //     (size === SIZE.small) &&
        // <Flex wrap width={576}>
        //         {children}
        //     </Flex>
        // </Flex>


        console.log(content);

        return (
            // {content}
            <Flex {...this.props} justify='center' style={{ height: '100%' }}>
                {children}
            </Flex>
        );
    }
}

// Page.size = SIZE;