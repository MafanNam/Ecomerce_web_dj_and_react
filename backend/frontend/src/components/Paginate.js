import React from 'react'
import {Pagination} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import {useLocation} from "react-router-dom";


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function Paginate({pages, page, isAdmin = false}) {

    let keyword = useQuery().get("keyword")

    if(!keyword){
        keyword = ''
    }


    return (pages > 1 && (
            <Pagination>
                {[...Array(pages).keys()].map((x) => (
                    <LinkContainer
                        key={x + 1}
                        to={!isAdmin ?
                            `/?keyword=${keyword}&page=${x + 1}`
                            : `/admin/productlist/?keyword=${keyword}&page=${x + 1}`}
                    >
                        <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                    </LinkContainer>
                ))}
            </Pagination>
        )
    )
}

export default Paginate
