import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormInput from "../../components/formComponents/FormInput";
import FormSelect from "../../components/formComponents/FormSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IRequisitionDetails } from "../../interface/forms";
import { genderOptions, urgencyOptions } from "./constants";
import { RequisitionFormContext } from "@src/contextAPI/RequisitionForm";

const RequisitionDetailsForm = () => {
     const ctx = React.useContext(RequisitionFormContext)
     const {
          handleChange,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          values,
          setFieldTouched,
          setFieldValue,
          isValid,
     } = useFormik<IRequisitionDetails>({
          initialValues: {
               requisitionTitle: "",
               noOfOpenings: 0,
               urgency: "",
               gender: "",
          },
          validationSchema: Yup.object().shape({
               requisitionTitle: Yup.string().required("Requisition title is required"),
               noOfOpenings: Yup.number()
                    .typeError("Enter a valid number")
                    .required("Number of openings is required")
                    .positive("Enter a valid number")
                    .min(1, "Enter a valid number"),
               urgency: Yup.string().required("Urgency is required"),
               gender: Yup.string().required("Gender is required"),
          }),
          onSubmit: () => {
               ctx?.setFormStep(1);
          },
     });

     return (
          <Box width="100%" as="form" onSubmit={handleSubmit as any}>
               <Box width="100%">
                    <FormInput
                         label="Requisition Title"
                         placeholder="Enter requisition title"
                         name="requisitionTitle"
                         onChange={(e) => {
                              setFieldValue("requisitionTitle", e.target.value);
                              ctx?.setRequisitionTitle(e.target.value)
                         }}
                         onBlur={handleBlur}
                         value={values.requisitionTitle}
                         error={errors?.requisitionTitle}
                         touched={touched?.requisitionTitle}
                    />
                    <FormInput
                         label="Number of openings"
                         placeholder="Enter number of openings"
                         name="noOfOpenings"
                         onChange={(e) => {
                              setFieldValue("noOfOpenings", e.target.value);
                              ctx?.setNumOfOpenings(e.target.value)
                         }}
                         onBlur={handleBlur}
                         value={values.noOfOpenings}
                         error={errors?.noOfOpenings}
                         touched={touched?.noOfOpenings}
                    />
                    <FormSelect
                         label="Gender"
                         name="gender"
                         placeholder="Select gender"
                         options={genderOptions}
                         onChange={(_name: string, val: string) => {
                              let selectedGender = ""
                              if (val === 'm') selectedGender = "Male"
                              else if (val === 'f') selectedGender = "Female"
                              else if (val === 'nb') selectedGender = "Non Binary"

                              setFieldValue("gender", selectedGender)
                              ctx?.setGender(selectedGender)
                         }}
                         onBlur={handleBlur}
                         value={values.gender}
                         error={errors.gender}
                         touched={touched.gender}
                    />
                    <FormSelect
                         label="Urgency"
                         name="urgency"
                         placeholder="Select urgency"
                         options={urgencyOptions}
                         onChange={(_name: string, val: string) => {
                              let selectedUrgency = ""
                              if (val === '0') selectedUrgency = "Urgent"
                              else if (val === '1') selectedUrgency = "Immediate Joining"
                              else if (val === '2') selectedUrgency = "Relaxed"

                              setFieldValue("urgency", selectedUrgency)
                              ctx?.setUrgency(selectedUrgency)
                         }}
                         onBlur={handleBlur}
                         value={values.gender}
                         error={errors.urgency}
                         touched={touched.urgency}
                    />
                    <Flex w="100%" justify="flex-end" mt="4rem">
                         <Button colorScheme="red" type="submit">
                              Next
                         </Button>
                    </Flex>
               </Box>
          </Box>
     );
};

export default RequisitionDetailsForm;
