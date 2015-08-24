/**
 * Created by kotokz on 15/8/22.
 */
import React, { Component, PropTypes } from 'react';

export default class Die extends Component {

    render () {
        const { onClick, number } = this.props
        switch (number) {
            case 1:
                return (
                    <div className='first-face' onClick={onClick}>
                        <span className='pip'></span>
                    </div>
                )
            case 2:
                return (
                    <div className='second-face' onClick={onClick}>
                        <span className='pip'></span>
                        <span className='pip'></span>
                    </div>
                )
            case 3:
                return (
                    <div className='third-face' onClick={onClick}>
                        <span className='pip'></span>
                        <span className='pip'></span>
                        <span className='pip'></span>
                    </div>
                )
            case 4:
                return (
                    <div className='fourth-face' onClick={onClick}>
                        <div className='column'>
                            <span className='pip'></span>
                            <span className='pip'></span>
                        </div>
                        <div className='column'>
                            <span className='pip'></span>
                            <span className='pip'></span>
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div className='fifth-face' onClick={onClick}>
                        <div className='column'>
                            <span className='pip'></span>
                            <span className='pip'></span>
                        </div>
                        <div className='column'>
                            <span className='pip'></span>
                        </div>
                        <div className='column'>
                            <span className='pip'></span>
                            <span className='pip'></span>
                        </div>
                    </div>
                )
            case 6:
                return (
                    <div className='sixth-face' onClick={onClick}>
                        <div className='column'>
                            <span className='pip'></span>
                            <span className='pip'></span>
                            <span className='pip'></span>
                        </div>
                        <div className='column'>
                            <span className='pip'></span>
                            <span className='pip'></span>
                            <span className='pip'></span>
                        </div>
                    </div>
                )
        }
    }
}

Die.propTypes = {
    onClick: React.PropTypes.func,
    number: React.PropTypes.number
};