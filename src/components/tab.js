import React, { Component } from 'react';

export class Tab extends Component {
    constructor() {
        super();
        this.state = { headerActive: '' };
    }
    componentWillMount() {
        
        let headerActive;

        let header = this.props.children[0],
            headerItems = header.props.children;

        // console.log(headerItems)

        headerActive = headerItems.filter((item)=> {
            return item.props.active;
        }).pop();
        
        // console.log(headerActive)

        this.state = { headerActive: headerActive };

    }
    componentWillUpdate() {
        // console.log('render tab');
    }

    handleChange = (tab) => {
        // console.log(tab);

        if (typeof(this.props.onChange) === 'function') {
            this.props.onChange(tab);
        }

    }

    updateState = (state) => {
        this.setState(state);
    }
    getState = () => {
        return this.state;
    }

    render() {

        let items = React.Children.map(this.props.children, child => {
            if (child.type.name === 'TabHeader') {
                return React.cloneElement(child, {
                    onChange: this.handleChange,
                    updateState: this.updateState,
                    getState: this.getState
                })
            } else {
                return React.cloneElement(child, {
                    getState: this.getState
                })
            }
        });
        
        return (
            <div id={ this.props.id } className="tab">
                { items }
            </div>
        );
    }
}

Tab.Header = class TabHeader extends Component {
    constructor() {
        super();
    }
    render() {

        // console.log(this.props.children)
        // https://egghead.io/lessons/react-use-react-cloneelement-to-extend-functionality-of-children-components
        let items = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                onChange: this.props.onChange,
                updateState: this.props.updateState,
                getState: this.props.getState
            })
        });

        // console.log(this)
        // console.log(items)
        
        return (
            <ul className="header">
                { items }
            </ul>
        );
    }
}

Tab.Header.Item = class TabHeaderItem extends Component {
    render() {

        var state = this.props.getState();

        return (
            // https://stackoverflow.com/questions/30533171/react-js-conditionally-applying-class-attributes
            <li id={this.props.id}
                className={"item".concat(this.props.reference === state.headerActive.props.reference ? " active" : "")}
                onClick={(e)=>{
                    this.props.updateState({ headerActive: this });
                    this.props.onChange(this);
                }}>
                { this.props.children }
            </li>
        );
    }    
}

Tab.Body = class TabBody extends Component {
    render() {

        let items = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                getState: this.props.getState
            })
        });

        return (
            <div className="body padding-20">
                { items }
            </div>
        )
    }
}

Tab.Body.Item = class TabBodyItem extends Component {
    render() {

        var state = this.props.getState();

        return (
            <div className={"item".concat(this.props.id === state.headerActive.props.reference ? " active" : "")}>
                { this.props.children }
            </div>
        )
    }
}