import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Option extends Component {
    componentWillMount() {
        // console.log(this);

        let self = this,
            itemSelected,
            itemChildren = this.props.children;

        itemSelected = itemChildren.filter((item)=> {
            return item.props.value === self.props.selected;
        }).pop();

        // console.log(itemSelected);

        this.state = { itemSelected: itemSelected };

    }    
    onChange = (item) => {
        // console.log(item);

        let element = ReactDOM.findDOMNode(this);

        element.querySelector(".menu").style.display = "none";

        if (typeof(this.props.onChange) === 'function') {
            this.props.onChange(item);
        }

    }
    updateState = (state) => {
        this.setState(state);
    }
    render() {

        // console.log(this)

        let itemSelected = this.state.itemSelected,
            itemChildren,
            divContainer,
            propsChildren;

        itemChildren = React.Children.map(itemSelected.props.children, item => {
            if (item.type === "span"){
                return React.createElement('strong', null, item.props.children);
            }
            return item;
        });

        // console.log(itemChildren);

        divContainer = React.createElement('div', {
            onClick: (e) =>{
                // console.log(this);
                // console.log(ReactDOM.findDOMNode(this))

                let element = ReactDOM.findDOMNode(this);

                element.querySelector(".menu").style.display = "block";

            }
        }, itemChildren, <i className="caret"></i>);

        propsChildren = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                onChange: this.onChange,
                updateState: this.updateState,
            })
        });

        return (
            // <div className="option margin-0" style={this.props.style}>
            <div className="option" style={this.props.style}>
                {divContainer}
                <div className="menu right" style={{display: "none"}}>
                    <div className="content">
                        <ul className="body">
                            {propsChildren}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Option.Item = class Item extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <li onClick={(e)=> {
                    this.props.updateState({ itemSelected: this });
                    this.props.onChange(this);                
                }}>
                {this.props.children}
            </li>
        )
    }
}