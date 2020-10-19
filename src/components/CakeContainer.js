import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../components/redux/cake/cakeActions'


function CakeContainer(props) {
    return (
        <div>
            <h1>Number of cakes- {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
