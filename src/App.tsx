import React from "react";
import MainMenu from "./component/mainMenu";
import { Button, Divider, Input, Segment } from "semantic-ui-react";
import Footer from "./component/footer";
import StatusBarComponent from "./component/statusbar";
import MainHeaderComponent from "./component/mainHeader";
import LayoutComponent from "./component/layout";
import DividerComponent from "./component/divider";
import SearchComponent from "./component/search";
import { userOwnedPegaInfo } from "./services/endpoints/pegas";

const App = () => {

  const handleSearch = async (input : string)  => {
    if(input){
      
      try {
        const response = await userOwnedPegaInfo(input);
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      {/*  <RoutesComponent/> */}
      {/*   <Routes>
        <Route path="/" element={<App />} />
        <Route path="general" element={<GeneralComponent />}/>
      </Routes> */}
      
      <LayoutComponent>
        <StatusBarComponent/>
        <MainHeaderComponent />
        <SearchComponent handleSearchInput={handleSearch}/>
        {/* <DividerComponent /> */}
        {/* <MainMenu /> */}
       {/*  <Footer /> */}
      </LayoutComponent>
    </>
  );
};

export default App;
