import {
     Container,
     Tabs,
     TabList,
     Tab,
     TabPanels,
     TabPanel,
     Heading,
     TabProps,
     Box,
     Grid,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";
import { RequisitionFormContext } from "@src/contextAPI/RequisitionForm";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
     return (
          <Tab p="1rem" fontFamily="Poppins" {...props}>
               {children}
          </Tab>
     );
};

const HomeLayout = () => {
     const ctx = useContext(RequisitionFormContext)
     const handlePage = (pageNumber: PageNumbers) => {
          ctx?.setFormStep(pageNumber);
     };

     return (
          <Box w="100%">
               <Container maxW="1200px">
                    <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
                         Create Candidate Requisition
                    </Heading>
                    <Tabs index={ctx?.formStep ?? 0} isLazy lazyBehavior="keepMounted">
                         <TabList>
                              <CustomTab>Requistion Details</CustomTab>
                              <CustomTab>Job Details</CustomTab>
                              <CustomTab>Interview Settings</CustomTab>
                         </TabList>
                         <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
                              <TabPanels>
                                   <TabPanel>
                                        <RequisitionForm />
                                   </TabPanel>
                                   <TabPanel>
                                        <JobDetailsForm />
                                   </TabPanel>
                                   <TabPanel>
                                        <InterviewSettingsForm handleTab={handlePage} />
                                   </TabPanel>
                              </TabPanels>
                              <DisplayCard />
                         </Grid>
                    </Tabs>
               </Container>
          </Box>
     );
};

export default HomeLayout;
