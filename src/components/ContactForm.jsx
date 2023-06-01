import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { db } from '../config/firebase';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const ContactForm = () => {
  const [initialValues, setUserData] = useState({
    name: '',
    email: '',
    mobile: '',
    companyName: '', // Moved the companyName field after mobile
    message: '',
  });

  // Define the form validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.string().required('Mobile number is required'),
    companyName: Yup.string().required('Company name is required'),
    message: Yup.string().required('Message is required'),
  });

  // Define the form submission handler
  const handleSubmit = async (values,onSubmitProps) => {
    // Handle form submission logic here
    try {
      setUserData(values);
      await addDoc(collection(db, "Contact Us"),values);
      console.log(initialValues);
      alert('We received your request, our team will contact you soon!');
      onSubmitProps.resetForm();
    } catch (error) {
      console.error('Error submitting form data to Firebase:', error);
      alert('An error occurred while submitting the form data. Please try again.');
    }
};



  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className='flex flex-col justify-center items-start w-[300px] gap-3 p-3 shadow shadow-slate-400'>
        <div className='flex flex-col w-full'>
          <label htmlFor="name">Name</label>
          <Field type="text" placeholder='Name' id="name" name="name" className='shadow shadow-black appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          <ErrorMessage name="name" component="div" className='text-textOrange text-xs' />
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor="email">Email</label>
          <Field type="email" placeholder='Email' id="email" name="email" className='shadow shadow-black appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          <ErrorMessage name="email" component="div" className='text-textOrange text-xs' />
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor="mobile">Mobile Number</label>
          <Field type="text" placeholder='Phone Number' id="mobile" name="mobile" className='shadow shadow-black appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          <ErrorMessage name="mobile" component="div" className='text-textOrange text-xs' />
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor="companyName">Company Name</label>
          <Field type="text" placeholder='Company Name' id="companyName" name="companyName" className='shadow shadow-black appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          <ErrorMessage name="companyName" component="div" className='text-textOrange text-xs' />
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor="message">Message</label>
          <Field as="textarea" placeholder='Message' id="message" name="message" className='shadow shadow-black appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          <ErrorMessage name="message" component="div" className='text-textOrange text-xs' />
        </div>

        <button type="submit" className='flex justify-center items-center w-full py-1 text-white bg-gray-950'>Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
