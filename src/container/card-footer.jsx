import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color } from '../variables';

const Container = styled.div`
	display: flex;
	box-align: center;
	flex-align: center;
	align-items: center;
	box-pack: justify;
	flex-pack: justify;
	justify-content: space-between;
	height: 3rem;
	background-color: #f0f3f6;
	padding-left: 1rem;
	padding-right: 1rem;
`;

const CardFooter = (props) => {

	const { children } = props;

	return (
		<Container {...props}>
			{children}
		</Container>
	)
}

CardFooter.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default CardFooter;