import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, borderColor } from '../variables';


const Container = styled.li`
    transition: all 250ms cubic-bezier(0.5, 0, 0.1, 1);
    overflow: hidden;
`;

const Header = styled.button`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.5px;
    border: 1px solid ${borderColor};
    display: inline-block;
    background: none;
    appearance: none;
    cursor: pointer;
    width: 100%;
    color: #152935;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    cursor: pointer;
    padding: 0.5rem 0 0.5rem 0.2rem;
    outline: none;
`;

const Title = styled.p`
    margin: 0 0 0 0.3rem;
    font-size:13px;
`;

const Button = styled.div`
    transition: all 250ms cubic-bezier(0.5, 0, 0.1, 1);
    height: 1rem;
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;        
    padding: 0.1rem 0.05em 0.1rem 0.1rem;
    margin: 0 0 0 0.25rem;
    fill: #8c9ba5;
    ${props => props.open && ` 
        transform: rotate(90deg);
        fill: ${color.outline};
    `}
    ${Header}:focus & {
        outline: 1px solid ${color.outline};
        outline-offset: -.5px;
    }    
`;

const Content = styled.div`
    transition: all 300ms cubic-bezier(0, 0, 0.25, 1);
    padding: 0 1rem 0 1.5rem;
    height: 0;
    visibility: hidden;
    font-size: 12px;
    border-top: 1px solid white;
    opacity: 0;
    ${props => props.open && ` 
        height: auto;
        visibility: visible;
        opacity: 1;
        transition: all 300ms cubic-bezier(0.25, 0, 1, 1);
    `}
`;

export default class Item extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        open: PropTypes.bool.isRequired
    };

    static defaultProps = {
        title: 'Section',
        open: false,
    };

    render() {

        const { id, title, open, children, getState } = this.props,
            isOpen = getState().itemActive && getState().itemActive.props.id === id;

        return (
            <Container { ...this.props }>
                <Header onClick={(e) => {
                    this.props.updateState({ itemActive: this });
                    this.props.onChange(this);
                }}>
                    <Button open={isOpen}>
                        <svg width="8" height="12" viewBox="0 0 8 12" fillRule="evenodd">
                            <polygon stroke="none" points="0 10.6 4.7 6 0 1.4 1.4 0 7.5 6 1.4 12"></polygon>
                        </svg>
                    </Button>
                    <Title> {title} </Title>
                </Header>
                <Content open={isOpen}>
                    {children}
                </Content>
            </Container >
        );

    }
}