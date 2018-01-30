import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../variables';

const Button = styled.button`
    color: ${color.base};
	${props => props.primary && `
        background: white;
        color: palevioletred;
    `}    
`;

Object.assign(Button, {
    displayName: 'Button',
    propTypes: {
        label: PropTypes.string.isRequired,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        onClick: PropTypes.func,
    },
});

export default Button;