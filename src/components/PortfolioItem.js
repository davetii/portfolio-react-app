import React from 'react'
const PortfolioItem = (props) => {
    console.log(props);
    return (
        <div>
            <h1>A Thing ive donr</h1>
            Portfolio Item {props.match.params.id}
        </div>
        )

}
export default PortfolioItem