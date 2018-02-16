// http://react.carbondesignsystem.com/?selectedKind=InteriorLeftNav&selectedStory=Default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
// https://github.com/carbon-design-system/carbon-components-react/tree/master/src/components/InteriorLeftNav
// https://react.semantic-ui.com/modules/sidebar#sidebar-example-left-push
// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/modules/Sidebar/SidebarPushable.js
// https://stackoverflow.com/questions/39974486/accordion-sidebar-menu-using-nav-components-with-react-bootstrap
// https://github.com/trendmicro-frontend/react-sidenav
// https://codepen.io/ciro-maciel/pen/JpONeN
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { color, font, shadow } from '../variables';

import SideBarHeader from "./sidebar-header";
import SideBarItem from "./sidebar-item";
import SideBarFooter from "./sidebar-footer";


const Container = styled.nav`
    font-family: ${font.family};
    font-size: ${font.size.normal};

    background:#212121;
    border-right:1px solid #e5e5e5;
    position:relative;
    float: left;
    top:0;
    bottom:0;
    height:100%;
    left:0;
    width:60px;
    overflow:hidden;
    -webkit-transition:width .05s linear;
    transition:width .05s linear;
    -webkit-transform:translateZ(0) scale(1,1);
    z-index:1000;


    &:hover{
        width:250px;
        overflow:visible;        
    }
`;

const List = styled.ul`
    margin:7px 0;
    padding:0;
`;


export default class SideBar extends PureComponent {
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

        const items = {};
        items.header = this.props.children[0];
        items.list = [];
        items.footer = this.props.children[this.props.children.length - 1];

        items.list = React.Children.map(this.props.children, (child, i) => {
            if (child.type === SideBarItem) {
                return child;
            }
        })

        console.log(items);

        return (
            <Container>
                {items.header}
                <List>
                    {items.list}
                </List>
                {items.footer}
            </Container>
        );
    }
}


SideBar.Header = SideBarHeader;
SideBar.Item = SideBarItem;
SideBar.Footer = SideBarFooter;