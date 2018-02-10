

class Counter extends React.Component{

    constructor(props){
        super(props)
        
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 12
        };
    }

addOne(){
console.log('addone method',this.props);
this.setState((prevState) => {
    return {
        count : prevState.count + 1,
    }
}

);
}
subtractOne(){
    console.log('subtractOne method',this.props);
    this.setState((prevState) => {
        return {
            count : prevState.count - 1,
        }
    }
    );
}

reset(){
    console.log('reset method',this.props);
}

render(){
    return (
        <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.subtractOne}>-1</button>
        <button onClick={this.reset}>reset</button>
        </div>
    );
}

} 

ReactDOM.render(<Counter />,document.getElementById('app'));