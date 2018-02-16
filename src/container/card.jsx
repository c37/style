import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, font, shadow } from '../variables';

import CardBody from "./card-body";
import CardFooter from "./card-footer";


const Container = styled.div`
	font-family: ${font.family};
	font-size: ${font.size.normal};
	color: ${font.color.normal};
	box-shadow: ${shadow.normal};
    display: flex;
    box-orient: vertical;
    box-direction: normal;
	flex-direction: column;
    box-sizing: border-box;
	margin: 10px;
    width: 12.5rem;
    height: 15rem;
    background-color: #fff;
    border: 1px solid #dfe3e6;
    &:focus {
        outline: 1px solid ${color.outline};
    }
`;

const Card = (props) => {
	
	const { children, onBlur, onClick, onFocus, onKeyDown, onKeyUp, onMouseDown, onMouseEnter, onMouseLeave, onMouseUp } = props;
	
	return (
		<Container {...props}
			onBlur={onBlur && onBlur(this)}
			onFocus={onFocus && onFocus(this)}
			onClick={onClick && onClick(this)}
			onFocus={onFocus && onFocus(this)}
			onKeyDown={onKeyDown && onKeyDown(this)}
			onKeyUp={onKeyUp && onKeyUp(this)}
			onMouseDown={onMouseDown && onMouseDown(this)}
			onMouseEnter={onMouseEnter && onMouseEnter(this)}
			onMouseLeave={onMouseLeave && onMouseLeave(this)}
			onMouseUp={onMouseUp && onMouseUp(this)}
		>
			{children}
		</Container>
	)
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tabIndex: PropTypes.number,
	onBlur: PropTypes.func,
	onClick: PropTypes.func,
	onFocus: PropTypes.func,
	onKeyDown: PropTypes.func,
	onKeyUp: PropTypes.func,
	onMouseDown: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	onMouseUp: PropTypes.func,
};

Card.defaultProps = {
	tabIndex: 0,
};

Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;