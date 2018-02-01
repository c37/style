import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 30px;
    color: #676b72;
`;

export const H2 = H1.withComponent('h2').extend`
    font-size: 24px;
`;

export const H3 = H1.withComponent('h3').extend`
    font-size: 18px;
`;