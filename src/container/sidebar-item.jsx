import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, font, shadow } from '../variables';


const Container = styled.li`
    list-style: none;
    width:250px;

`;


export default class Item extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        onChange: PropTypes.func
    };

    static defaultProps = {
        onChange: () => { },
    };

    componentWillMount() {
        // this.state = {
        //     itemActive: this.props.children.filter(function (item) {
        //         return item.props.open
        //     }).pop()
        // };
    }

    render() {

        const { children } = this.props;

        return (
            <Container>
                { children }
            </Container>
        );
    }
}
