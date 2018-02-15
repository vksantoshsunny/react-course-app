
class IndecisionApp extends React.Component {

constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    
     this.state = {
        title :  "Indecision Title Props",
        subtitle :  "This is a subtitle",
        options : [],
     };
}

componentDidMount(){
    console.log('component did mount');
}

componentDidUpdate(){
    console.log('component did update');
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

handleDeleteOption(optionToRemove){
    console.log('Ready to remove', optionToRemove);
    this.setState((prevState) => ({
        options : prevState.options.filter( (option) =>   optionToRemove !== option   )
    }))
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
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
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

const Options = (props) => {
        
                return (
                    <div>
                    {props.options.map((option) => <Option key={option} optiontext={option} handleDeleteOption={props.handleDeleteOption}/>)}
                    <button onClick={props.handleDeleteOptions}>Delete All</button>
                    </div>
                    );
                
        }


const Option = (props) => {
    return (
        <span>
        <p>{props.optiontext}</p>
        <button onClick={ (e) => {
            props.handleDeleteOption(props.optiontext)
        }}
        >Remove</button>
        </span>
    );
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