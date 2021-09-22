import React from 'react'
import { connect } from 'react-redux'

export const Home = () => {
    return (
        <div>
            <h1>I'm alive</h1>
        </div>
    )
}

const mapStateToProps = (state:any) => state

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
