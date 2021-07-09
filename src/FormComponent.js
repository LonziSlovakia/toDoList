import React from 'react';
let tasks = [];

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        tasks += this.state.value
        event.preventDefault();
        console.log(tasks);
    }

    render() {
        const { color, onClick } = this.props;
        // const [input, setInput] = useState('');
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="nazov" type="text" value={this.state.value} onChange={this.handleChange} className={`border-b-2 border-${color}-500 bg-transparent text-${color}-700 focus:outline-none focus:border-${color}-700 text-center`} />
                <input onClick={() => onClick(this.form.nazov.value)} type="submit" value="Pridať úlohu" className={`my-7 mx-2 p-1 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400 focus:shadow-inner`} />
            </form>
        );
    }
}

export default Form