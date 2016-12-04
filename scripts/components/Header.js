/**
 * Created by vadim on 03.12.2016.
 */
import React from 'react';

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
    },

    propTypes : {
        tagline : React.PropTypes.string
    }
});

export default Header;