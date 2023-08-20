import React from 'react';
import {Formik} from "formik";
import * as yup from "yup";
import {Box, Button, TextField, useMediaQuery, useTheme} from "@mui/material";
import Header from "../../../components/Header";
import {tokens} from "../../../theme";

const initialValues = {
   firstName: '',
   lastName: '',
   email: '',
   contact: '',
   address1: '',
   address2: ''
}
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
   firstName: yup.string().required('required'),
   lastName: yup.string().required('required'),
   email: yup.string().email('invalid email').required('required'),
   contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
   address1: yup.string().required('required'),
   address2: yup.string(),
})

const FormPage = () => {
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const handleFormSubmit = (values) => {
      console.log(values)
   }

   return (
      <Box m={isNonMobil ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='CREAT USER' subtitle='Create a New User Profile'/>
         <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
         >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
               <form onSubmit={handleSubmit}>
                  <Box display={"grid"} gap="30px" gridTemplateColumns='repeat(4,minmax(0,1fr))'
                       sx={{
                          "& > div": {gridColumn: isNonMobil ? undefined : 'span 4'},
                          "& .MuiFilledInput-root" : {
                            backgroundColor: `${colors.primary[400]}`
                          }
                       }}>
                     <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label='First Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                        name='firstName'
                        error={!!touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        sx={{gridColumn: 'span 2'}}
                     ></TextField>
                     <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label='Last Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        name='lastName'
                        error={!!touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        sx={{gridColumn: 'span 2'}}
                     ></TextField>
                     <TextField
                        fullWidth
                        variant='filled'
                        type='email'
                        label='Email'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name='email'
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{gridColumn: 'span 4'}}
                     ></TextField>
                     <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label='Contact Number'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.contact}
                        name='contact'
                        error={!!touched.contact && !!errors.contact}
                        helperText={touched.contact && errors.contact}
                        sx={{gridColumn: 'span 4'}}
                     ></TextField>
                     <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label='Address 1'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address1}
                        name='address1'
                        error={!!touched.address1 && !!errors.address1}
                        helperText={touched.address1 && errors.address1}
                        sx={{gridColumn: 'span 4'}}
                     ></TextField>
                     <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label='Address 2'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address2}
                        name='address2'
                        error={!!touched.address2 && !!errors.address2}
                        helperText={touched.address2 && errors.address2}
                        sx={{gridColumn: 'span 4'}}
                     ></TextField>
                  </Box>
                  <Box display={"flex"} justifyContent={"flex-end"} alignItems={'center'} pt='20px'>
                     <Button type='submit' color='secondary' variant={"contained"} sx={{
                        fontSize: '16px',
                     }}>
                        Create New User
                     </Button>
                  </Box>
               </form>
               )}
               </Formik>
               </Box>
               );
            };

            export default FormPage;