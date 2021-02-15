import React from 'react'
import styles from './ContactForm.module.scss'
import { Formik, Field, Form, FormikHelpers, useFormik, FormikProvider } from 'formik';
import HumanButton from '../button/Button';


const onSubmit = values => { alert("form sent") }
const initialValues = {
    name: '',
    email: '',
    message: '',
}

const validate = values => {
    let errors = {
        email: '',
        name: '',
        message: ''
    }

    if (!values.name) {
        errors.name = "name is mandatory"
    }
    if (!values.email) {
        errors.email = 'emails is mandatory';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.message) {
        errors.message = "message is mandatory"
    }

    return errors
}

function ContactForm() {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    })

    return (
        <Formik value={formik} initialValues={initialValues} onSubmit={onSubmit}>
            <form onSubmit={formik.handleSubmit} action="" className={styles.form}>
                        <h4>Contactez moi!</h4>
                        <label htmlFor="nom">Nom</label>
                        <Field
                            id="name"
                            name="name"
                            placeholder="Votre nom ici.."
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            formentry
                        />
                        {formik.errors.name && formik.touched.name && formik.isValid === false ? <div className={styles.errorMsg}>{formik.errors.name}</div> : <div className={styles.errorMsg}></div>}

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="nom@domain.com"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email && formik.isValid === false ? <div className={styles.errorMsg}>{formik.errors.email}</div> : <div className={styles.errorMsg}></div>}
                        <label htmlFor="message">Message</label>
                        <textarea className={styles.textarea}
                            name="message"
                            placeholder="Votre message ici..."
                            id=""
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        >
                        </textarea>
                        {formik.errors.message && formik.touched.message && formik.isValid === false ? <div className={styles.errorMsg} >{formik.errors.message}</div> : <div className={styles.errorMsg}></div>}
                        <HumanButton style={"outline"}
                            text={"Envoyer le message"}
                            buttonImage="send.png"
                        />
            </form>
        </Formik>

    )
}
export default ContactForm
