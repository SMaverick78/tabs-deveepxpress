import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab, Typography } from "@material-ui/core";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFixedColumns,
} from "@devexpress/dx-react-grid-material-ui";


const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      {...other}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      style={{ height: "100%" }}
      id={`simple-tabpanel-${index}`}
    >
      <div style={{ height: "100%" }}>{children}</div>
    </Typography>
  );
};

function App() {
  const [columns] = useState([
    { name: "name", title: "Name" },
    { name: "gender", title: "Gender" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" }
  ]);
  const [rows] = useState([
    { gender: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
    { gender: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
    { gender: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
    { gender: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
    { gender: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
    {
      gender: "Male",
      name: "Robert",
      city: "Las Vegas",
      car: "Chevrolet Cruze"
    },
    { gender: "Female", name: "Lisa", city: "London", car: "BMW 750" },
    { gender: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
    {
      gender: "Male",
      name: "Thomas",
      city: "Rio de Janeiro",
      car: "Honda Accord"
    },
    { gender: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
    { gender: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
    {
      gender: "Male",
      name: "Robert",
      city: "Los Angeles",
      car: "Honda Accord"
    },
    {
      gender: "Male",
      name: "William",
      city: "Los Angeles",
      car: "Honda Civic"
    },
    { gender: "Male", name: "Mark", city: "Austin", car: "Nissan Altima" }
  ]);
  const [leftColumns] = useState(['name']);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs centered value={value} onChange={handleChange}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>Go to tab 2</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid rows={rows} columns={columns}>
          <Table />
          <TableHeaderRow />
          <TableFixedColumns leftColumns={leftColumns} />
        </Grid>
      </TabPanel>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
