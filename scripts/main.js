var React =  require("react");
var ReactDOM = require("react-dom");


var App = React.createClass({
    render : function () {
        return (
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header tagline="Fresh Seafood Market"/>
                    </div>
                    <Order />
                    <Inventory />
                </div>

        )

    }
});

var Header = React.createClass({
    render : function () {
        return (
            <header className="top">
                <h1>Catch
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span>
                    Day</h1>
                <h3 className="tagline"><span>{this.props.tagline}</span></h3>
            </header>
        )
    }
});

var Order = React.createClass({
    render : function () {
        return (<p1>Order</p1>)
    }
});
var Inventory = React.createClass({
    render : function () {
        return (<p1>Inventory</p1>)
    }
});

React.render(<App/>, document.querySelector('#main'));