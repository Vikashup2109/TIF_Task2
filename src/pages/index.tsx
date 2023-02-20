import type { NextPage } from "next";
import HomeLayout from "@containers/home/HomeLayout";
import Layout from "../components/Layout";
import DataProvider from "../containers/home/DataProvider";
import RequisitionFormContextProvider from "@src/contextAPI/RequisitionForm";

const Home: NextPage = () => {
     return (
          <RequisitionFormContextProvider>
               <Layout title="Settings">
                    <DataProvider>
                         <HomeLayout />
                    </DataProvider>
               </Layout>
          </RequisitionFormContextProvider>
     );
};

export default Home;
