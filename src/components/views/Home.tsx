import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

export const Home = ({...props}:RouteComponentProps) => {
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
