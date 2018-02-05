import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, fontFamily, shadowUp } from '../variables';


const Container = styled.ul`
    list-style: none;
    box-sizing: border-box;
    width: 100%;
    padding: 0;
`;

export default class Accordion extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string
    };

    componentWillMount() {
        this.state = {
            // ao iniciar o componente, salvo uma nova lista dos children com a nova referencia para o evento PAI
            items: React.Children.map(this.props.children, (child, i) => {
                return React.cloneElement(child, {
                    onClick: this.handleClick,
                    id: new Date().getTime() + i
                })
            })
        };
    }

    handleClick = (e) => {

        // o target correto
        const targetId = e.target.parentNode.parentNode.parentNode.parentNode.id || e.target.parentNode.parentNode.parentNode.id || e.target.parentNode.parentNode.id || e.target.parentNode.id;

        // Se nao tenho um item aberto ou o item selecionado sera diferente do aberto atualmente
        if (!this.state.selectedItem || (String(targetId) !== String(this.state.selectedItem.props.id))) {

            const items = React.Children.map(this.state.items, child => {


                return React.cloneElement(child, {
                    open: String(targetId) === String(child.props.id) ? true : false
                })

            });

            const selectedItem = items.filter(function (item) {
                return item.props.open
            }).pop();

            this.state = {
                items,
                selectedItem
            };

            this.props.onChange(selectedItem, e);

            this.forceUpdate();
        }

    };

    render() {
        return (
            <Container {...this.props}>
                {this.state.items}
            </Container>
        );
    }
}