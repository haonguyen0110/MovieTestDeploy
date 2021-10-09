import { Fragment } from "react"
import { Route } from "react-router-dom"
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
export const UserTemplate = (props) => {


    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {

        return <Fragment >
            <div  style={{marginBottom:'-100px', overflowY:'hidden',backgroundImage:"url('http://pixner.net/boleto/demo/assets/images/account/account-bg.jpg')",height:'100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="py-20" >

                    <Component {...propsRoute}/>
                </div>
               
           
           

            </div>

        </Fragment>
    }} />
}