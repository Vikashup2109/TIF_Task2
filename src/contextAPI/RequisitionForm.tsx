import React, { useState } from "react"

enum GENDER {
     MALE = "Male", FEMALE = "Female", NON_BINARY = "Non Binary"
}
enum URGENCY {
     URGENT = "Urgent", IMMEDIATE_JOINING = "Immediate Joining", RELAXED = "Relaxed"
}

interface IProps {
     children: React.ReactNode
}

const RequisitionFormContext = React.createContext<{
     formStep: 0 | 1 | 2,
     setFormStep: React.Dispatch<React.SetStateAction<0 | 1 | 2>>,
     requisitionTitle: string,
     setRequisitionTitle: React.Dispatch<React.SetStateAction<string>>,
     jobTitle: string,
     setJobTitle: React.Dispatch<React.SetStateAction<string>>,
     jobDetails: string,
     setJobDetails: React.Dispatch<React.SetStateAction<string>>,
     jobLocation: string,
     setJobLocation: React.Dispatch<React.SetStateAction<string>>,
     gender: GENDER | null,
     setGender: React.Dispatch<React.SetStateAction<GENDER | null>>,
     urgency: URGENCY | null,
     setUrgency: React.Dispatch<React.SetStateAction<URGENCY | null>>,
     numOfOpenings: number,
     setNumOfOpenings: React.Dispatch<React.SetStateAction<number>>,

} | null>(null)
const RequisitionFormContextProvider = ({ children }: IProps) => {
     const [formStep, setFormStep] = useState<0 | 1 | 2>(0);
     console.log({ formStep })

     const [requisitionTitle, setRequisitionTitle] = useState("")
     const [jobTitle, setJobTitle] = useState("")
     const [jobDetails, setJobDetails] = useState("")
     const [jobLocation, setJobLocation] = useState("")
     const [numOfOpenings, setNumOfOpenings] = useState(0)
     const [gender, setGender] = useState<GENDER | null>(null)
     const [urgency, setUrgency] = useState<URGENCY | null>(null)


     return (<RequisitionFormContext.Provider value={{
          formStep, setFormStep, requisitionTitle, setRequisitionTitle, numOfOpenings, setNumOfOpenings, gender, setGender, urgency, setUrgency, jobTitle, setJobTitle, jobDetails, setJobDetails, jobLocation, setJobLocation
     }}>
          {children}
     </RequisitionFormContext.Provider>)
}

export { RequisitionFormContext }
export default RequisitionFormContextProvider; 