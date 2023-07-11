import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'


function SearchBox() {

    const [keyword, serKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}`)
        } else {
            history.push(history.location.pathname)
        }
    }

    return (
        <Form onSubmit={submitHandler} className="d-flex" inline>
            <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => serKeyword(e.target.value)}
            />
            <Button
                variant="outline-success"
                type='submit'
            >Search</Button>
        </Form>
    )
}

export default SearchBox
