import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, font, shadow } from '../variables';


const Container = styled.ul`
    font-family: ${font.family};
    list-style: none;
    box-sizing: border-box;
    width: 100%;
    padding: 0;
`;

export default class Accordion extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        onChange: PropTypes.func
    };

    static defaultProps = {
        onChange: () => { },
    };

    componentWillMount() {
        this.state = {
            itemActive: this.props.children.filter(function (item) {
                return item.props.open
            }).pop()
        };
    }

    // componentWillUpdate() {
    //     console.log('render itens');
    // }

    updateState = (state) => {
        this.setState(state);
    }
    getState = () => {
        return this.state;
    }

    handleChange = (itemActive) => {
        this.props.onChange(itemActive);
    }

    render() {

        // ao render do componente, criamos uma uma nova lista dos children com a nova referencia para o evento PAI
        const items = React.Children.map(this.props.children, (child, i) => {
            return React.cloneElement(child, {
                onChange: this.handleChange,
                updateState: this.updateState,
                getState: this.getState
            })
        })

        return (
            <Container {...this.props}>
                {items}
            </Container>
        );
    }
}