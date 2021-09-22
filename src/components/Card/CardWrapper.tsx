import React from 'react'
import { connect } from 'react-redux'

export const CardWrapper = () => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state:any) => ({
    state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CardWrapper)
