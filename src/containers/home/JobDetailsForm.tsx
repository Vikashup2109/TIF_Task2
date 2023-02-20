import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormInput from "../../components/formComponents/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IJobDetails } from "../../interface/forms";
import { RequisitionFormContext } from "@src/contextAPI/RequisitionForm";

const JobDetailsForm = () => {
     const ctx = React.useContext(RequisitionFormContext)

     const { handleChange, errors, touched, handleBlur, handleSubmit, values, setFieldValue } =
          useFormik<IJobDetails>({
               initialValues: {
                    jobTitle: "",
                    jobDetails: "",
                    jobLocation: "",
               },
               validationSchema: Yup.object().shape({
                    jobTitle: Yup.string().required("Job Title is required"),
                    jobDetails: Yup.string().required("Job Details is required"),
                    jobLocation: Yup.string().required("Job Location is required"),
                    // jobPosition: Yup.string().required("Job position is required"),
               }),
               onSubmit: (values) => {
                    console.log("Job details submitted ")
                    ctx?.setFormStep(2);
               },
          });

     return (
          <Box width="100%" as="form" onSubmit={handleSubmit as any}>
               <Box width="100%">
                    <FormInput
                         label="Job Title"
                         placeholder="Enter job title"
                         name="jobTitle"
                         onChange={(e) => {
                              setFieldValue("jobTitle", e.target.value);
                              ctx?.setJobTitle(e.target.value)
                         }}
                         value={values.jobTitle}
                         onBlur={handleBlur}
                         error={errors?.jobTitle}
                         touched={touched?.jobTitle}
                    />
                    <FormInput
                         label="Job Details"
                         placeholder="Enter job details"
                         name="jobDetails"
                         onChange={(e) => {
                              setFieldValue("jobDetails", e.target.value);
                              ctx?.setJobDetails(e.target.value)
                         }}
                         value={values.jobDetails}
                         onBlur={handleBlur}
                         error={errors?.jobDetails}
                         touched={touched?.jobDetails}
                    />
                    <FormInput
                         label="Job Location"
                         name="jobLocation"
                         placeholder="Enter job location"
                         onChange={(e) => {
                              setFieldValue("jobLocation", e.target.value);
                              ctx?.setJobLocation(e.target.value)
                         }}
                         value={values.jobLocation}
                         onBlur={handleBlur}
                         error={errors.jobLocation}
                         touched={touched.jobLocation}
                    />
                    <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
                         <Button colorScheme="gray" type="button" onClick={() => ctx?.setFormStep(0)}>
                              Previous
                         </Button>
                         <Button colorScheme="red" type="submit">
                              Next
                         </Button>
                    </Flex>
               </Box>
          </Box>
     );
};

export default JobDetailsForm;
