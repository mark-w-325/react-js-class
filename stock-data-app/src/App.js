import React from "react";
import './App.css';
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import LoginForm from "./components/LoginForm";
import StockInfo from "./components/StockInfo";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            first: "Mark",
            last: "Williams",
            microsoftValue: 100,
            twitterValue: 200,
            amazonValue: 300,
            values: [
                {
                    "company": "Microsoft",
                    "value": 100
                },
                {
                    "company": "Twitter",
                    "value": 200
                },
                {
                    "company": "Amazon",
                    "value": 300
                },
                {
                    "company": "Apple",
                    "value": 400
                }
            ],
            email: 'email@email.com',
            password: 'password',
            stockData: [],
            isLoggedIn: false
        }
    }

    componentDidMount() {
        fetch("https://cloud.iexapis.com/stable/ref-data/market/us/exchanges?token=pk_f260ae22f82d4e328c8c8a08620f931b")
            .then(response => response.json())
            .then(response => this.setState({
                stockData: response
            }))
    }

    increaseValues() {
        this.setState((prevState) => ({
                    microsoftValue: prevState.microsoftValue + 1,
                    twitterValue: prevState.twitterValue + 1,
                    amazonValue: prevState.amazonValue + 1,
                }
            )
        )
    };

    increaseListValues() {
        this.setState((prevState) => ({
                    values: prevState.values.map((value) => {
                        value.value = value.value + 1;
                        return value;
                    })
                }
            )
        )
    };

    decreaseValues() {
        this.setState((prevState) => ({
                    microsoftValue: prevState.microsoftValue - 1,
                    twitterValue: prevState.twitterValue - 1,
                    amazonValue: prevState.amazonValue - 1,
                }
            )
        )
    };

    decreaseListValues() {
        this.setState((prevState) => ({
                    values: prevState.values.map((value) => {
                        value.value = value.value - 1;
                        return value;
                    })
                }
            )
        )
    };

    scrambleValues() {
        this.setState((prevState) => ({
                    microsoftValue: prevState.twitterValue,
                    twitterValue: prevState.amazonValue,
                    amazonValue: prevState.microsoftValue,
                }
            )
        )
    };

    scrambleListValues() {
        this.setState((prevState) => ({
                    values: prevState.values.map((value) => {
                        value.value = value.value - 1;
                        return value;
                    })
                }
            )
        )
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.first)
        console.log(this.state.last)
    }

    handleFormUpdate(values) {
        this.setState({
            email: values.email,
            password: values.password,
            isLoggedIn: true
        })
    }

    render() {
        return (
            <div>
                <h1>Stock Data App</h1>
                <Welcome
                    first={this.state.first}
                    last={this.state.last}
                />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>First Name:
                        <input type="text" name="first" value={this.state.first}
                               onChange={this.handleChange.bind(this)}
                        />
                    </label>
                    <label>Last Name:
                        <input type="text" name="last" value={this.state.last}
                               onChange={this.handleChange.bind(this)}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <Main
                    values={this.state.values}
                    microsoftValue={this.state.microsoftValue}
                    twitterValue={this.state.twitterValue}
                    amazonValue={this.state.amazonValue}
                    increase={this.increaseValues.bind(this)}
                    decrease={this.decreaseValues.bind(this)}
                    scramble={this.scrambleValues.bind(this)}
                    increaseList={this.increaseListValues.bind(this)}
                    decreaseList={this.decreaseListValues.bind(this)}
                    scrambleList={this.scrambleListValues.bind(this)}
                />
                <LoginForm handleFormUpdate={this.handleFormUpdate.bind(this)} loginStatus={this.state.isLoggedIn} />
                {/*{*/}
                {/*    this.state.stockData.map((items) =>*/}
                {/*        <div key={items.mic}>*/}
                {/*            <h1>{items.longName}</h1>*/}
                {/*            <p>This acronym is: {items.mic}</p>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}
                <StockInfo stocks={this.state.stockData} />
            </div>
        )
    }
}

export default App;

