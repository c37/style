import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color } from '../variables';

const Container = styled.div`
	position: relative;
	display: flex;
	box-pack: center;
    flex-pack: center;
    justify-content: center;
	text-align: center;
	padding-left: 1rem;
	padding-top: 1rem;
	padding-right: 1rem;
	height: 12rem;
`;

const Body = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 1rem;
`;

const Title = styled.div`
    font-weight: 400;
    padding-top: 1.5rem;
`;

const TitleName = styled.p`
    font-size: 1.125rem;
    display: block;
    width: 11.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    margin: 0;
    line-height: 1.2;
`;


const TitleLink = styled.a`
    font-size: 0.75rem;
    display: block;
    width: 11.25rem;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    text-align: center;
`;

const TitleInfo = styled.h4`
    font-size: 0.75rem;
    display: block;
    width: 11.25rem;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: #5a6872;
`;

const Icon = styled.div`
    display: flex;
    box-align: center;
    flex-align: center;
    align-items: center;
    box-pack: center;
    flex-pack: center;
    justify-content: center;
    width: 3.125rem;
    height: 3.125rem;
    background-color: #fff;
    border: 1px solid #dfe3e6;
    border-radius: 100%;
`;


const CardBody = (props) => {

    const { link, info, title, icon } = props;

    const cardLinkContent = props.link
        ? props.link.map((link, key) => (
            <TitleLink key={key} href={link}>
                {link}
            </TitleLink>
        ))
        : '';

    const cardInfoContent = props.info
        ? props.info.map((info, key) => (
            <TitleInfo key={key}>
                {info}
            </TitleInfo>
        ))
        : '';

    const cardLinkContentArray = Object.keys(cardLinkContent);
    const cardInfoContentArray = Object.keys(cardInfoContent);

    return (
        <Container {...props}>
            {props.children}
            <Body>
                <Icon />
                <Title>
                    <TitleName>
                        {props.title}
                    </TitleName>
                    {cardLinkContentArray.map((info, key) => cardLinkContent[key])}
                    {cardInfoContentArray.map((info, key) => cardInfoContent[key])}
                </Title>
            </Body>
        </Container>
    )
}

CardBody.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    title: PropTypes.string,
    link: PropTypes.node,
    info: PropTypes.array,
    className: PropTypes.string,
};

CardBody.defaultProps = {
    icon: '',
    title: '',
};

export default CardBody;