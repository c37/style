import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, font, shadow } from '../variables';


const Container = styled.div`

`;

export default class Box extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {

        const { children } = this.props;

        return (
            <Container {...this.props}>
                {children}
            </Container>
        );
    }
}