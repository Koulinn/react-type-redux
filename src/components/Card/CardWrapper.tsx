import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface Music {
    album: {
        id:number
        title:string
        cover: string
    }
    artist: {
        id: number
        name:string
        picture: string
    }
    duration: number
    id: number
}

interface CardWrapperProps {
    music: Music

  }

export const CardWrapper = ({music}:CardWrapperProps) => {
    return (
        <Card className="p-3 border-0" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={music.album.cover} />
            <Card.Body className="px-0">
                <Card.Title>{music.album.title}</Card.Title>
                <Card.Text>
                    {music.artist.name}
                </Card.Text>
                <Link to="/details">Go somewhere</Link>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = (state: any) => ({
    state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CardWrapper)
