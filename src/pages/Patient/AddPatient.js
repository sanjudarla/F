import React,{useEffect} from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import { InputAdornment, TextField } from '@mui/material';
import swal from 'sweetalert';
import {useFormik} from 'formik';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import PatientNav from '../../PatientNavigate';



const AddPatients= ({id}) => {
  const Navigate=useNavigate();
  const InitialValues={
    Patient_Id:" ",
    Patient_Name:" ",
    Gender:" ",
    Age:" ",
    Patient_Address:" ",
    Contact_No:" ",
    Guardian_Name:" ",
    Emergency_contact_no:" ",
    Nature_Of_Disease:" ",
    Patient_Condition:" ",
    Doctor_Name:" ",
    Room_Type:" "
  }

  useEffect(() => {
    axios.get(`https://localhost:44360/api/Patient/${id}`)
  .then((Data)=>{
      InitialValues.Patient_Id=Data.data.Patient_Id;
      InitialValues.Patient_Name=Data.data.Patient_Name;
      InitialValues.Gender=Data.data.Gender;
      InitialValues.Age=Data.data.Age;
      InitialValues.Patient_Address=Data.data.Patient_Address;
      InitialValues.Contact_No=Data.data.Contact_No;
      InitialValues.Guardian_Name=Data.data.Guardian_Name;
      InitialValues.Emergency_contact_no=Data.data.Emergency_contact_no;
      InitialValues.Nature_Of_Disease=Data.data.Nature_Of_Disease;
      InitialValues.Patient_Condition=Data.data.Patient_Condition;
      InitialValues.Doctor_Name=Data.data.Doctor_Name;
      InitialValues.Room_Type=Data.data.Room_Type;
      
  })
  },[])

 

  const formik=useFormik({
    initialValues:InitialValues,
    onSubmit:(values)=>{
      console.log(values);
      axios.post(`https://localhost:44360/api/Patient/${id}`,values).then(()=>{
        swal("Success!", "Details have been Added", "success").then(function () {
          Navigate("/ViewPatient");
        }); 
      
        })
    },
   
  })
  return (
    <>
  <Box sx={{ display: 'flex' }}>
  <PatientNav/>

       <Box component="main" sx={{ flexGrow: 1 ,m:3}}>
       <h1>Add Patient Details</h1>
       <form onSubmit={formik.handleSubmit} >
          <Stack spacing={2} sx={{ width: '50%' }}>
            <TextField 
              value={formik.values.Patient_Name} 
              onChange={formik.handleChange}
              name="Patient_Name"  
              autoComplete='off'
              label="Patient Name" 
              hiddenLabel
              id="filled-hidden-label-normal"
              variant="filled"
              error={formik.touched.Patient_Name && Boolean(formik.errors.Patient_Name)}
              helperText={formik.touched.Patient_Name && formik.errors.Patient_Name}
              onBlur={formik.handleBlur}
              />
            <TextField 
              value={formik.values.Gender} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="Gender" 
              autoComplete='off'
              label="Gender" 
              variant="outlined" 
              error={formik.touched.Gender && Boolean(formik.errors.Gender)}
              helperText={formik.touched.Gender&& formik.errors.Gender}
              onBlur={formik.handleBlur}
              />
              <TextField 
              value={formik.values.Age} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="Age" 
              autoComplete='off'
              label="Age" 
              variant="outlined" 
              error={formik.touched.Age && Boolean(formik.errors.Age)}
              helperText={formik.touched.Age&& formik.errors.Age}
              onBlur={formik.handleBlur}
              />
              <TextField 
              value={formik.values.Patient_Address} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="Patient_Address" 
              autoComplete='off'
              label="Patient_Address" 
              variant="outlined" 
              error={formik.touched.Patient_Address && Boolean(formik.errors.Patient_Address)}
              helperText={formik.touched.Patient_Address&& formik.errors.Patient_Address}
              onBlur={formik.handleBlur}
              />
              <TextField 
              value={formik.values.Contact_No} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="Contact_No" 
              autoComplete='off'
              label="Contact No" 
              variant="outlined" 
              error={formik.touched.Contact_No && Boolean(formik.errors.Contact_No)}
              helperText={formik.touched.Contact_No&& formik.errors.Contact_No}
              onBlur={formik.handleBlur}
              />
              <TextField 
              value={formik.values.Guardian_Name} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="Guardian_Name" 
              autoComplete='off'
              label="Guardian Name" 
              variant="outlined" 
              error={formik.touched.Guardian_Name && Boolean(formik.errors.Guardian_Name)}
              helperText={formik.touched.Guardian_Name&& formik.errors.Guardian_Name}
              onBlur={formik.handleBlur}
              />
              <TextField 
              value={formik.values.Emergency_contact_no} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="Emergency_contact_no" 
              autoComplete='off'
              label="Emergency_contact_no" 
              variant="outlined" 
              error={formik.touched.Emergency_contact_no && Boolean(formik.errors.Emergency_contact_no)}
              helperText={formik.touched.Emergency_contact_no&& formik.errors.Emergency_contact_no}
              onBlur={formik.handleBlur}
              />
               <TextField 
              value={formik.values.Nature_Of_Disease} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="Nature_Of_Disease" 
              autoComplete='off'
              label="Nature_Of_Disease" 
              variant="outlined" 
              error={formik.touched.Nature_Of_Disease && Boolean(formik.errors.Nature_Of_Disease)}
              helperText={formik.touched.Nature_Of_Disease&& formik.errors.Nature_Of_Disease}
              onBlur={formik.handleBlur}
              />
               <TextField 
              value={formik.values.Patient_Condition} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="Patient_Condition" 
              autoComplete='off'
              label="Patient_Condition" 
              variant="outlined" 
              error={formik.touched.Patient_Condition && Boolean(formik.errors.Patient_Condition)}
              helperText={formik.touched.Patient_Condition&& formik.errors.Patient_Condition}
              onBlur={formik.handleBlur}
              />
               <TextField 
              value={formik.values.Doctor_Name} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="Doctor_Name" 
              autoComplete='off'
              label="Doctor_Name" 
              variant="outlined" 
              error={formik.touched.Doctor_Name && Boolean(formik.errors.Doctor_Name)}
              helperText={formik.touched.Doctor_Name&& formik.errors.Doctor_Name}
              onBlur={formik.handleBlur}
              />
               <TextField 
              value={formik.values.Room_Type} 
              onChange={formik.handleChange}
              id="outlined-basic" 
              name="Room_Type" 
              autoComplete='off'
              label="Room_Type" 
              variant="outlined" 
              error={formik.touched.Room_Type && Boolean(formik.errors.Room_Type)}
              helperText={formik.touched.Room_Type&& formik.errors.Room_Type}
              onBlur={formik.handleBlur}
              />
            <Button type="submit" variant="contained">Save</Button>
           
          </Stack>
          </form>
       </Box>
       </Box>
  
    </>
   )
}

export default AddPatients