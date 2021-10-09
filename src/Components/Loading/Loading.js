import React from 'react'
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './LoadingStyle.css'


export default function Loading() {

    const dispatch = useDispatch;
    const { isLoading } = useSelector(state => state.LoadingReducer)
   
    return (
        <Fragment>
            {isLoading ?
            <div className="loading">
                <div className="text-white text-4xl">Loading...</div>
            </div>
            :''}
        </Fragment>

    )
}
