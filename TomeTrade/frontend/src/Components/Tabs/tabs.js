import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddBook from '../AddBook/addbook'
import TempTable from '../BookTable/temptable'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 , width: '150%'}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: '100%' ,background:"white" }}
      
    >
      <Tabs
        
        orientation="vertical"
        //variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', height: 150}}
      >
        <Tab color = "white" label="Profile" {...a11yProps(0) }/>
        <Tab label="Add a book" {...a11yProps(1)} />
        <Tab label="Browse Tometrade" {...a11yProps(2)} />

      </Tabs>
      <TabPanel value={value} index={0} color= "white">
          Coming Soon!
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddBook>
        </AddBook>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TempTable>
        </TempTable>
      </TabPanel>
    </Box>
  );
}
