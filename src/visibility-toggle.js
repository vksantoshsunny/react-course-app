



class ToggleVisibility extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            visibility : false,
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility(){
        console.log('I am in handler');
        this.setState((prevState) =>
        {
            console.log(this.state);
            return {
                visibility: prevState.visibility ? false : true,
            }
        }

        );
    }
    render(){
        console.log(this.state);
        return (
            <div>

            <h1>This is the content {this.state.visibility ? 'Visible' : 'Hidden'}</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Visible' : 'Hidden'}</button>
            </div>
        );
    }
} 

ReactDOM.render(<ToggleVisibility />,document.getElementById('app'));