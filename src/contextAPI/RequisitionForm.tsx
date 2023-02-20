import React, { useState } from "react"

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
     gender: string,
     setGender: React.Dispatch<React.SetStateAction<string>>,
     urgency: string,
     setUrgency: React.Dispatch<React.SetStateAction<string>>,
     numOfOpenings: string,
     setNumOfOpenings: React.Dispatch<React.SetStateAction<string>>,

} | null>(null)
const RequisitionFormContextProvider = ({ children }: IProps) => {
     const [formStep, setFormStep] = useState<0 | 1 | 2>(0);

     const [requisitionTitle, setRequisitionTitle] = useState("")
     const [jobTitle, setJobTitle] = useState("")
     const [jobDetails, setJobDetails] = useState("")
     const [jobLocation, setJobLocation] = useState("")
     const [numOfOpenings, setNumOfOpenings] = useState("0")
     const [gender, setGender] = useState("")
     const [urgency, setUrgency] = useState("")

     console.log({ urgency })

     return (<RequisitionFormContext.Provider value={{
          formStep, setFormStep, requisitionTitle, setRequisitionTitle, numOfOpenings, setNumOfOpenings, gender, setGender, urgency, setUrgency, jobTitle, setJobTitle, jobDetails, setJobDetails, jobLocation, setJobLocation
     }}>
          {children}
     </RequisitionFormContext.Provider>)
}

export { RequisitionFormContext }
export default RequisitionFormContextProvider; 