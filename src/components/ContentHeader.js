import { Children, useEffect } from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";

const ContentHeader = ({ children }) => {
    children = children.charAt(0).toUpperCase() + children.slice(1)
    const location = useLocation().pathname.split('/');
    location[0] = 'Home'
    if (location[1] == '')
        location[1] = (children)
    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>{children}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {
                                location.map((el, index) => {
                                    el  = el.charAt(0).toUpperCase() + el.slice(1)
                                    if (index == location.length - 1)
                                        return <li key={index} className="breadcrumb-item active">{el}</li>
                                    else
                                        return <li key={index} className="breadcrumb-item"><Link to="#">{el}</Link></li>
                                })
                            }


                        </ol>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContentHeader