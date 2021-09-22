import React from 'react'
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'

export const Hero = () => {
    return (
        <div>
            <Jumbotron></Jumbotron>
        </div>
    )
}

const mapStateToProps = (state:any) => ({
    state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)
