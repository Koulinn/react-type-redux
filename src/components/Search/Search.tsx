import React, { FormEvent } from 'react'
import requests from '../../lib'
import { Container, Form } from 'react-bootstrap'
import { useState } from 'react'

interface SearchProps {
    setSearchResults: (a: []) => void
  }

function Search({ setSearchResults }: SearchProps) {
    const [searchValue, setSearchValue] = useState('')

    const sendSearch = async (e:FormEvent) => {
        try {
            e.preventDefault()
            const serverResponse = await requests.getRequest(searchValue)
            const data = serverResponse
            setSearchResults(data)
            console.log(data, 'from search')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
            <div className="input-group mb-3">
                <Form id="form">
                    <input id="inputValue" type="text" className="form-control" placeholder="search" aria-label="search" onChange={(e)=>setSearchValue(e.target.value)}
                        aria-describedby="basic-addon2"></input>
                </Form>
                <button type="button" onClick={(e) => sendSearch(e)} form="form" className="btn btn-info">Search!</button>
            </div>
        </Container>
    )
}

export default Search
