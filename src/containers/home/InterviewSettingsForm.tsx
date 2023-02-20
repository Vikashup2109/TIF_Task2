import { Button, Flex, Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import FormSelect from "../../components/formComponents/FormSelect";
import { useFormik } from "formik";
import { PageNumbers } from "../../interface/home";
import { IInterViewSettings } from "../../interface/forms";
import {
     interviewDurationOptions,
     interviewLanguageOptions,
     interviewModeOptions,
} from "./constants";
import { RequisitionFormContext } from "@src/contextAPI/RequisitionForm";

const InterviewDetailsForm: React.FC<{
     handleTab: (n: PageNumbers) => void;
}> = ({ handleTab }) => {
     const ctx = useContext(RequisitionFormContext)
     const {
          errors,
          touched,
          handleSubmit,
          values,
          setFieldTouched,
          setFieldValue,
     } = useFormik<IInterViewSettings>({
          initialValues: {
               interviewMode: "",
               interviewDuration: "",
               interviewLanguage: "",
          },
          onSubmit: (values) => {
               alert("Form successfully submitted");
          },
     });

     return (
          <Box width="100%" as="form" onSubmit={handleSubmit as any}>
               <Box width="100%">
                    <FormSelect
                         label="Interview Mode"
                         placeholder="Select interview mode"
                         name="interviewMode"
                         options={interviewModeOptions}
                         onChange={(name: string, value: string) => {
                              let interviewMode = "";
                              if (value === "offline") interviewMode = "Offline"
                              else if (value === "online") interviewMode = "Online"
                              setFieldValue(name, "interviewMode");
                              ctx?.setInterviewMode(interviewMode)
                         }}
                         value={values.interviewMode}
                         onBlur={setFieldTouched}
                         error={errors?.interviewMode}
                         touched={touched?.interviewMode}
                    />
                    <FormSelect
                         label="Interview Duration"
                         placeholder="Select interview duration"
                         name="interviewDuration"
                         options={interviewDurationOptions}
                         onChange={(name: string, value: string) => {
                              let interviewDuration = "";
                              if (value === "medium") interviewDuration = "Medium"
                              else if (value === "short") interviewDuration = "Short"
                              else if (value === "long") interviewDuration = "Long"
                              setFieldValue(name, "interviewDuration");
                              ctx?.setInterviewDuration(interviewDuration)
                         }}
                         onBlur={setFieldTouched}
                         value={values?.interviewDuration}
                         error={errors?.interviewDuration}
                         touched={touched?.interviewDuration}
                    />
                    <FormSelect
                         label="Job Location"
                         name="interviewLanguage"
                         placeholder="Select interview language"
                         options={interviewLanguageOptions}
                         onChange={(name: string, value: string) => {
                              console.log({ name, value });

                              let interviewLanguage = "";
                              if (value === "en") interviewLanguage = "English"
                              else if (value === "hi") interviewLanguage = "Hindi"
                              setFieldValue(name, "interviewLanguage");
                              ctx?.setInterviewLanguage(interviewLanguage)
                         }}
                         onBlur={setFieldTouched}
                         error={errors.interviewLanguage}
                         touched={touched.interviewLanguage}
                         value={values.interviewLanguage}
                    />
                    <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
                         <Button colorScheme="gray" type="button" onClick={() => handleTab(1)}>
                              Previous
                         </Button>
                         <Button colorScheme="red" type="submit">
                              Submit
                         </Button>
                    </Flex>
               </Box>
          </Box>
     );
};

export default InterviewDetailsForm;
