import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import Search from '../Search/Search'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import CardWrapper from '../Card/CardWrapper'

// interface Music {
//     album: {
//         id:number
//         title:string
//         cover: string
//     }
//     artist: {
//         id: number
//         name:string
//         picture: string
//     }
//     duration: number
//     id: number
// }

export const Home = ({...props}:RouteComponentProps) => {
    const [searchResults, setSearchResults] = useState([])
    console.log(searchResults)
    
    return (
        <div>
            <h1>I'm alive</h1>
            <Search setSearchResults={setSearchResults}/>
            <Container className="d-flex flex-wrap justify-content-between" fluid>
                {searchResults.map(music=> <CardWrapper key={(music as any).id} music={music}/>)}


            </Container>
        </div>
    )
}

const mapStateToProps = (state:any) => state

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
