import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]);

        } else {
            alert('El nombre de la categoria debe tener al menos 3 caracteres');
        }
    }


    return (

        <form className='box' onSubmit={handleSubmit}>
            <h2 className='form-title'>add category</h2>

            <input type='text' onChange={handleInputChange} placeholder='Add category' />
        </form>

    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory



