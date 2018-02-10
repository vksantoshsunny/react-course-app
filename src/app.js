
class IndecisionApp extends React.Component {

constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handleAction = this.handleAction.bind(this);
    
     this.state = {
        title :  "Indecision Title Props",
        subtitle :  "This is a subtitle",
        options : [],
     };
}

handleAction(){

    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);

}

handleDeleteOptions(){
    this.setState(() => ({options : []})
    )
}

handleAddOptions(option){
    this.setState((prevState) => ({options : prevState.options.concat(option)})
    )
}

        render(){

            return (
                <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Action handleAction={this.handleAction} hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOptions={this.handleAddOptions}/>
                </div>
                );
        }
    }

const Header = (props) => {
    return (
        <div>
        <title>Hello</title>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    )
}


const Action = (props) => {
    return (
            <div>
            <button onClick={props.handleAction} disabled={!props.hasOptions}>What should I do?</button>
            </div>
    )
}

class Options extends React.Component {
        
            render(){
                console.log(this.props.options);
                return (
                    <div>
                    {this.props.options.map((option) => <Option key={option} optiontext={option}/>)}
                    <button onClick={this.props.handleDeleteOptions}>Delete All</button>
                    </div>
                    );
            }
        }

class Option extends React.Component{
render(){
    console.log(this.props.key);
    return <p>{this.props.optiontext}</p>
}
        

}

class AddOption extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error: ''
        }
    }

    handleAddOptions(e){
            e.preventDefault();
            const option = e.target.elements.option.value;
            console.log(option, 'this is entered');
            if(option.trim().length>0)
            {
                this.props.handleAddOptions(option);
                e.target.elements.option.value = '';
            }
    }
                render(){
                    return (
                        <form onSubmit={this.handleAddOptions}>
                        <input type='text' name='option' placeholder='Type option'/>
                        <button>Add </button>
                        </form>
                        );
                }
 }


        
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));