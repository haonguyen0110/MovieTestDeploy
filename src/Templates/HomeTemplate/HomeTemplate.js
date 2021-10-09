import { Fragment, useEffect, useState } from "react"
import { Route } from "react-router-dom"
import Footer from "./Layout/Footer/Footer";

import Navbar from "./Layout/Header/Navbar";

export const HomeTemplate = (props) => {



    const [reponsive, setReponsive] = useState(true);
    useEffect(() => {
        window.onresize = () => {
            let { innerWidth } = window;
            if (innerWidth <= 1000) {
                setReponsive(false);
            } else {
                setReponsive(true);
            }
        }
        window.onload = () => {
            let { innerWidth } = window;
            if (innerWidth <= 1000) {
                setReponsive(false);
            } else {
                setReponsive(true);
            }
        }
    }, [])

    const renderComponent = (propsRoute) => {
        if (reponsive === true) {
            return <props.Component {...propsRoute} />
        } else {
            if (props.ComponentMobile) {
                return <props.ComponentMobile {...propsRoute} />
            }
        }
        return <props.Component {...propsRoute} />
    }

    return <Route exact path={props.path} render={(propsRoute) => {

        return <div style={{marginBottom:'-100px'}}>

            <Navbar />



            {renderComponent(propsRoute)}



            <Footer />
        </div>
    }} />
}