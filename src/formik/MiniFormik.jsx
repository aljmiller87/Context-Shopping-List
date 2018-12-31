import React, { Component } from 'react'

class MiniFormik extends Component {
    state = {
        values: this.props.initialValues || {},
        touched: {},
        errors: {}
    };
    

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        event.persist();
        this.setState(prevState => ({
            values: {
                ...prevState.values,
                [name]: value,
            },
            
        }));
    }
    
    handleBlur = (event) => {
        const target = event.target;
        const name = target.name;
        event.persist();
        this.setState(prevState => ({
            touched: {
                ...prevState.touched,
                [name]: true,
            },
            
        }));
    }

    handleSubmit = e => {
        e.preventDefault();
        // validate
        this.props.onSubmit(this.state.values)
    }
    
    render() {
      return this.props.children({
          ...this.state,
          handleChange: this.handleChange,
          handleBlur: this.handleBlur,
          handleSubmit: this.handleSubmit,
        })
    }
}

export default class UseMiniFormkik extends React.Component {

    render() {
        return (
            <MiniFormik initialValues={{
                    isGoing: true,
                    numberOfGuests: 2
                }}
                onSubmit={values => alert(JSON.stringify(values, null, 2))}
            >
                {(props) => {
                    const { values, errors, touched, handleBlur, handleChange, handleSubmit} =  props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <input 
                                name="isGoing" 
                                type="checkbox"
                                checked={values.isGoing}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label>Is going:</label>
                            <br/>
                            <label>
                                Number of guests:
                                <input 
                                    name="numberOfGuests"
                                    type="number" 
                                    value={values.numberOfGuests} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                            </label>

                            <pre>{JSON.stringify(props, null, 2)}</pre>
                        </form>   
                    );             
                }}
            </MiniFormik>
        );
    }
  }
  