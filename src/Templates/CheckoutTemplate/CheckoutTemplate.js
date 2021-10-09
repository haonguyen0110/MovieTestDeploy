import {  useEffect, useState } from "react"
import { Redirect, Route } from "react-router-dom"
import { USER_LOGIN } from "../../Util/Settings/config";


const CheckoutTemplate = (props) => {
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

    const { Component, ...restProps } = props;

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login" />
    }


    return <Route {...restProps} render={(propsRoute) => {

        return <div style={{marginBottom:'-100px'}}>

            {renderComponent(propsRoute)}

        </div>
    }} />
}

export default CheckoutTemplate