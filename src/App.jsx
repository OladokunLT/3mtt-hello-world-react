// import { useEffect, useState } from "react";
import React from "react"
import ViewList from "./components/viewList/ViewList";
// import ClickCounter from "./components/ClickCounter"
// import SecondaryNavbar from "./components/SecondaryNavbar";
// import { data } from "./mockData";

function App() {
  // const [apiData, setApiData] = useState([]);
  // const [totalItems, setTotalItems] = useState(0);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [viewMode, setViewMode] = useState("list");
  // const [currentPage, setCurrentPage] = useState(0);
  // const [itemsPerPage] = useState(8);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const mockdata = data;
  //       setApiData(mockdata);
  //       setTotalItems(mockdata.length);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>

      <ViewList />
      {/* < ClickCounter /> */}
      {/* <h1>Hello World</h1>; */}
      {/* <SecondaryNavbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
        totalItems={totalItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      /> */}
    </>
  );
}

export default App;
