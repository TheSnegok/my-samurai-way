import React from 'react';
import s from './Search.module.css';
import { Form, Formik } from 'formik';
import { CreateField } from '../../common/FormsControl/FormsControls';
import { FormsErrors } from '../../common/FormsErrors/FormsErrors';

const Search = (props) => {
    return (
        <Formik initialValues={{
            search: ''
        }}
            validate={(values) => {
                let errors = {};
                FormsErrors(values, errors, 'email', 15);
                return errors;
            }}
            onSubmit={(actions) => {
                console.log('ok');
            }}>
            { ({
                handleBlur,
                handleChange,
                values,
                errors,
                touched
            }) => (
                <Form>
                    <div className={s.flex}>
                        {CreateField(handleChange, handleBlur, 'Search', 'search', values.search, errors.search, touched.search)}
                        <button type='submit' className={s.button}>Search</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Search;