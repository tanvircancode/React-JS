import React from 'react';

class Button extends React.Component {
    render() {
        const { change } = this.props;
        return (
            <button type="button" onclick={change}>
            click here
            </button>
        );

    }
}

export default Button;
