import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    render() {
        const { incrementAge } = this.props;

        return (
            <>
                <h2>This is footer</h2>
                <div>
                    <button onClick={incrementAge}>Increment user age</button>
                </div>
            </>
        )
    }
}

export default Footer