import React, { Component } from 'react'
import Select from 'react-select';
import '../style/filter.css'

class Filter extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isClearable: true,
            label: props.label,
            options: props.categories
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(e){
        if(e == null){
            this.props.filterUpdated(this.state.label, "-1")
        }else{
            this.props.filterUpdated(this.state.label, e.value)
        }
    }

    
    render() {

        const theme = (theme) => ({
            ...theme,
            colors: {
                ...theme.colors,
                primary: '#fee01c',
                primary50: '#e4c601',
                primary25: '#fee01c',                    
            },
        });

        return (
            <div className='select-container'>
            <Select onChange={this.onChangeHandler} className='select' isClearable={this.state.isClearable} options={this.state.options} theme={theme}
            />
            </div>
            )
        }
    }
    
    export default Filter