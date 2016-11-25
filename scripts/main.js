var React =  require("react");
var ReactDOM = require("react-dom");


var App = React.createClass({
    render : function () {
        return (
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header />
                    </div>
                    <Order />
                    <Inventory />
                </div>

        )

    }
});

var Header = React.createClass({
    render : function () {
        return (<p1>Header</p1>)
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