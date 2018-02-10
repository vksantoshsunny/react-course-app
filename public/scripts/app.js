function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOptions = _this.handleAddOptions.bind(_this);
        _this.handleAction = _this.handleAction.bind(_this);

        _this.state = {
            title: "Indecision Title Props",
            subtitle: "This is a subtitle",
            options: []
        };
        return _this;
    }

    IndecisionApp.prototype.handleAction = function handleAction() {

        var randomNum = Math.floor(Math.random() * this.state.options.length);
        var option = this.state.options[randomNum];
        alert(option);
    };

    IndecisionApp.prototype.handleDeleteOptions = function handleDeleteOptions() {
        this.setState(function () {
            return { options: [] };
        });
    };

    IndecisionApp.prototype.handleAddOptions = function handleAddOptions(option) {
        this.setState(function (prevState) {
            return { options: prevState.options.concat(option) };
        });
    };

    IndecisionApp.prototype.render = function render() {

        return React.createElement(
            "div",
            null,
            React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
            React.createElement(Action, { handleAction: this.handleAction, hasOptions: this.state.options.length > 0 }),
            React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
            React.createElement(AddOption, { handleAddOptions: this.handleAddOptions })
        );
    };

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "title",
            null,
            "Hello"
        ),
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleAction, disabled: !props.hasOptions },
            "What should I do?"
        )
    );
};

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
    }

    Options.prototype.render = function render() {
        console.log(this.props.options);
        return React.createElement(
            "div",
            null,
            this.props.options.map(function (option) {
                return React.createElement(Option, { key: option, optiontext: option });
            }),
            React.createElement(
                "button",
                { onClick: this.props.handleDeleteOptions },
                "Delete All"
            )
        );
    };

    return Options;
}(React.Component);

var Option = function (_React$Component3) {
    _inherits(Option, _React$Component3);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
    }

    Option.prototype.render = function render() {
        console.log(this.props.key);
        return React.createElement(
            "p",
            null,
            this.props.optiontext
        );
    };

    return Option;
}(React.Component);

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, _React$Component4.call(this, props));

        _this4.handleAddOptions = _this4.handleAddOptions.bind(_this4);
        _this4.state = {
            error: ''
        };
        return _this4;
    }

    AddOption.prototype.handleAddOptions = function handleAddOptions(e) {
        e.preventDefault();
        var option = e.target.elements.option.value;
        console.log(option, 'this is entered');
        if (option.trim().length > 0) {
            this.props.handleAddOptions(option);
            e.target.elements.option.value = '';
        }
    };

    AddOption.prototype.render = function render() {
        return React.createElement(
            "form",
            { onSubmit: this.handleAddOptions },
            React.createElement("input", { type: "text", name: "option", placeholder: "Type option" }),
            React.createElement(
                "button",
                null,
                "Add "
            )
        );
    };

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
