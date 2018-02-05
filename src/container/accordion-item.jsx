import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, fontFamily, borderColor } from '../variables';


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
    padding: 0;
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
    padding: 0.5rem 0;
    outline: none;
`;

const Title = styled.p`
    margin: 0 0 0 0.3rem;
`;

const Button = styled.div`
    transition: all 250ms cubic-bezier(0.5, 0, 0.1, 1);
    height: 1rem;
    width: 1rem;
    padding: 0.25rem 0.125rem 0.25rem 0.25rem;
    margin: 0 0 0 0.25rem;
    fill: #8c9ba5;
    &:focus{
        outline: 1px solid #3d70b2;
        overflow: visible;
        outline-offset: -.5px;
    }
    ${props => props.open && ` 
        transform: rotate(90deg);
        fill: #3d70b2;
    `}
`;

const Content = styled.div`
    transition: all 300ms cubic-bezier(0, 0, 0.25, 1);
    padding: 0 1rem 0 1.5rem;
    height: 0;
    visibility: hidden;
    border-top: 1px solid white;
    opacity: 0;
    ${props => props.open && ` 
        height: auto;
        visibility: visible;
        opacity: 1;
        transition: all 300ms cubic-bezier(0.25, 0, 1, 1);
    `}
`;

export default class AccordionItem extends PureComponent {
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

        const { title, open, children, onClick } = this.props;

        // https://github.com/styled-components/styled-components/issues/431
        return (
            <Container { ...this.props }>
                <Header onClick={onClick}>
                    <Button>
                        <svg width="8px" height="12px" viewBox="0 0 8 12" fillRule="evenodd">
                            <polygon id="SVGID_1_" stroke="none" fill="#000000" points="0 10.6 4.7 6 0 1.4 1.4 0 7.5 6 1.4 12"></polygon>
                        </svg>
                    </Button>
                    <Title> {title} </Title>
                </Header>
                <Content open={open}>
                    {children}
                </Content>
            </Container >
        );

    }
}