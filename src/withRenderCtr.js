import React, {Component} from 'react';

export default function WithRenderCounter(Comp, data) {
    return class extends Component {
        constructor(props) {
            super(props);
            let newData = {
                data: data,
                count: 0
            };
            this.state = {
                data: newData
            };
        }

        render() {
            return (
                <Comp data={this.state.data} {...this.props} />
            );
        }
    }
}