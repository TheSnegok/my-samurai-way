import React from 'react';
import s from './Searcher.module.css';
import { Form, Formik } from 'formik';
import { CreateField } from '../FormsControl/FormsControls';
import { FormsErrors } from '../FormsErrors/FormsErrors';

const Searcher = (props) => {
    return (
        <Formik initialValues={{
            search: ''
        }}
            validate={(values) => {
                let errors = {};
                FormsErrors(values, errors, 'search', 15);
                return errors;
            }}
            onSubmit={(actions) => {
                props.setSearch(actions.search);
            }}>
            {({
                handleBlur,
                handleChange,
                values,
                errors,
                touched
            }) => (
                <Form>
                    <div className={s.searcher}>
                        {CreateField(handleChange, handleBlur, 'search', 'search', values.search, errors.search, touched.search)}
                        <button type='submit' className={s.button_search}></button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Searcher;