/**
 * Created by vadim on 02.12.2016.
 */
import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class StorePicker extends React.Component{
    goToStore(event) {
    event.preventDefault();
    let storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);

}
    render() {
    return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A store</h2>
            <input type="text" ref="storeId" defaultValue={h.getFunName()} required/>
            <input type="Submit"/>
        </form>
    )

}
}

reactMixin.onClass(StorePicker, History);

export default StorePicker;
