import React from "react";

class Main extends React.Component {

    getStyle(value) {
        const color_map = {
            100: 'green',
            200: 'pink',
            300: 'red',
            400: 'blue',
        };
        const class_map = {
            'green': 'Green',
            'pink': 'Pink',
            'red': 'Red',
            'blue': 'Blue',
        };
        return class_map[color_map[value]];
    }

    render() {

        return (
            <div>
                <h1>Stock Data For Today</h1>
                <ul>
                    <li key="ms">Microsoft: {this.props.microsoftValue}</li>
                    <li key="tw">Twitter: {this.props.twitterValue}</li>
                    <li key="amz">Amazon: {this.props.amazonValue}</li>
                    <button onClick={this.props.increase}>Increase Stock Values</button>
                    <button onClick={this.props.decrease}>Decrease Stock Values</button>
                    <button onClick={this.props.scramble}>Scramble Stock Values</button>
                </ul>
                <ul>
                    {
                        this.props.values.map((items) =>
                            <li className={this.getStyle(items.value)} key={items.company}>{items.company}: {items.value}</li>)
                    }
                    <button onClick={this.props.increaseList}>Increase Stock Values</button>
                    <button onClick={this.props.decreaseList}>Decrease Stock Values</button>
                    <button onClick={this.props.scrambleList}>Scramble Stock Values</button>
                </ul>
            </div>
        )
    }
}

export default Main;