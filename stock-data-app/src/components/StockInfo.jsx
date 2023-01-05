import React from "react";

class StockInfo extends React.Component {

    render() {
        return (
            <div>
                <h1>Stock Data for today!</h1>
                <ul>
                    {
                        this.props.stocks.map((stock) =>
                            <li key={stock.mic}>{stock.longName}: {stock.mic}</li>
                        )
                    }

                </ul>
            </div>
        )
    }
}

export default StockInfo;