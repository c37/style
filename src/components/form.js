// https://facebook.github.io/react/docs/forms.html
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
// https://stackoverflow.com/questions/41415262/react-get-input-value-on-form-submit-and-display-it?answertab=active#tab-top
// http://blog.revathskumar.com/2015/07/submit-a-form-with-react.html
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        // console.log(e);
        console.log(this);
        // console.log(ReactDOM.findDOMNode(this));

        let form = ReactDOM.findDOMNode(this),
            inputs = form.querySelectorAll('input:not(.hide)'),
            data = {};

        // console.log(inputs)

        for (var index = 0; index < inputs.length; index++) {
            var element = inputs[index];

            // if (!element.validation()) {
            //     break;
            // }

            data[inputs[index].name] = inputs[index].value;
        }
    }
    render() {
        return (
            <form id={this.props.id} onSubmit={this.handleSubmit} className={this.props.className} style={this.props.style}>
                 {this.props.children} 
                {/* { items } */}
                <input type="submit" className="hide"/>
            </form>
        )
    }
}

Form.Input = class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        var propsInput = {
            name: this.props.name,
            type: this.props.type,
            className: this.props.className,
            onChange: this.props.onChange,
            onBlur: (e) => {

                // console.log(e.target.parentNode);
                // console.log(this.props.validations)

                var elementValidation = e.target.parentNode.querySelector('.validation') || e.target.parentNode.parentNode.querySelector('.validation');
                    
                elementValidation.classList.add('hide');
                e.target.classList.remove("required");

                if (this.props.validations && this.props.validations.indexOf('required') > 0 && e.target.value === "") {
                    e.target.classList.add("required");
                    elementValidation.classList.toggle('hide');
                }

            },
            style: this.props.style,
            placeholder: this.props.placeholder
        };

        // motando as validations no componente html
        if (this.props.validations && this.props.validations.indexOf('required') > 0) {
            propsInput.required = 'required' ;
        }
        // motando as validations no componente html

        // para os tipos de componentes
        switch (this.props.type) {
            case 'checkbox':
                let propsSpan = {
                        className:"checkbox clickable",
                        onClick: () => {
                            document.getElementById(propsInput.id).checked = !document.getElementById(propsInput.id).checked;
                        }
                    },
                    propsDiv = {
                        className: this.props.className
                    };

                    // se o checkbox esta checked
                    if (this.props.checked && (this.props.checked === true || this.props.checked === 'checked')) {
                        propsInput.defaultChecked = "true";
                    }
                    // se o checkbox esta checked

                    // console.log(propsInput)
 
                // let span =  React.createElement('span', propsSpan);
                return React.createElement('div', propsDiv, React.createElement('input', propsInput), React.createElement('span', propsSpan, this.props.label));
            default:{
                if (this.props.focus) {
                    // https://stackoverflow.com/questions/39735816/how-do-i-set-a-ref-when-using-react-createelement
                    return React.createElement('input', {...propsInput, ref:(input => input && input.focus()) })
                } 
                // https://stackoverflow.com/questions/28889826/react-set-focus-on-input-after-render
                return React.createElement('input', {...propsInput, ref: 'input'});
            }
        }
        // para os tipos de componentes

    }
}

Form.Button = class Button extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = (e) => {
        if (this.props.form && (!e.target.classList.contains('disabled'))) {
            let form = document.getElementById(this.props.form),
                submit = form.querySelector('input[type="submit"]');
            submit.click();
        }
    }
    render() {
        return (
            <button id={this.props.id} className={this.props.className} style={this.props.style} onClick={this.handleClick}>
                {this.props.children}
            </button>
        )
    }
}