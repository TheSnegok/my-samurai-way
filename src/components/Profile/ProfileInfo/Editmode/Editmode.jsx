import { Form, Formik } from 'formik';
import React from 'react'
import s from './Editmode.module.css'
import { CreateField } from '../../../common/FormsControl/FormsControls'
import { FormsErrors } from '../../../common/FormsErrors/FormsErrors';

const Editmode = ({ profile, getInfo, setContacts }) => {

    const socialName = profile.contacts;
    

    const giveInfo = (formData) => {
        formData.contacts = {};
        formData.contacts.facebook = formData.facebook  || '';
        formData.contacts.website = formData.website || '';
        formData.contacts.vk = formData.vk || '';
        formData.contacts.twitter = formData.twitter || '';
        formData.contacts.instagram = formData.instagram || '';
        formData.contacts.youtube = formData.youtube || '';
        formData.contacts.github = formData.github || '';
        formData.contacts.mainLink = formData.mainLink || '';
        setContacts(profile.userId, formData.lookingForAJob, formData.lookingForAJobDescription, formData.fullname, formData.aboutMe, formData.contacts);
    }

    return (
        <div className={s.Editmode}>
            <button onClick={getInfo}>Info</button>
            <Formik initialValues={{
                fullname: profile.fullName,
                aboutMe: profile.aboutMe || '',
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription || ''
            }}
                validate={(values) => {
                    let errors = {};
                    FormsErrors(values, errors, 'fullname', 10);
                    FormsErrors(values, errors, 'aboutMe', 20);
                    FormsErrors(values, errors, 'lookingForAJobDescription', 40);
                    return errors;
                }}
                onSubmit={(actions) => {
                    giveInfo(actions);
                }}>
                {({
                    handleBlur,
                    handleChange,
                    values,
                    errors,
                    touched
                }) => (
                        <Form>
                            <div>
                                <b>Fullname: </b>{CreateField(handleChange, handleBlur, 'Fullname', 'fullname', profile.fullName, errors.fullname, touched.fullname)}
                            </div>
                            <div>
                                <b>About me: </b>{CreateField(handleChange, handleBlur, 'About me', 'aboutMe', profile.aboutMe || '', errors.aboutMe, touched.aboutMe)}
                            </div>
                            <div>
                                <b>Looking for a job: </b>{CreateField(handleChange, handleBlur, '', 'lookingForAJob', '', '', '', 'checkbox', 'off', values.lookingForAJob)}
                            </div>
                            <div>
                                <b>Looking for a job description: </b>{CreateField(handleChange, handleBlur, 'Looking for a job description', 'lookingForAJobDescription', profile.lookingForAJobDescription || '', errors.lookingForAJobDescription, touched.lookingForAJobDescription)}
                            </div>
                            <h3>Contacts: </h3>
                            {Object.keys(socialName).map(social => {
                                return (
                                    <div key={social}>
                                        <b>{social}</b>{CreateField(handleChange, handleBlur, social, social, socialName.social || '', errors.social, touched.social)}
                                    </div>
                                )
                            })}
                            <div>
                                <button type='submit'>Save</button>
                            </div>
                        </Form>
                    )}
            </Formik>
        </div>
    )
}

export default Editmode;