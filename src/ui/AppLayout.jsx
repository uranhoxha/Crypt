import TitleBar from "../ui/TitleBar";
import Navbar from "../ui/Navbar";
import CompleteImageSlider from "./CompleteImageSlider";
import TableTitle from "./TableTitle";
import TabsCategories from "./TabsCategories";
import Table from "./Table";
import CardSection from "./CardSection";

function AppLayout() {
  return (
    <div>
      <TitleBar />
      <Navbar />
      <CompleteImageSlider/>
      <TableTitle/>
      <TabsCategories/>
      <Table/>
      <CardSection/>
    </div>
  );
}

export default AppLayout;
