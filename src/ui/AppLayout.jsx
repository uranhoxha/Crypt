import TitleBar from "../ui/TitleBar";
import Navbar from "../ui/Navbar";
import CompleteImageSlider from "./CompleteImageSlider";
import TableTitle from "./TableTitle";
import TabsCategories from "./TabsCategories";

import CardSection from "./CardSection";
import InfoSection from "./InfoSection";

function AppLayout() {
  return (
    <div>
      <TitleBar />
      <Navbar />
      <CompleteImageSlider/>
      <TableTitle/>
      <TabsCategories/>
      <CardSection/>
      <InfoSection/>
    </div>
  );
}

export default AppLayout;
