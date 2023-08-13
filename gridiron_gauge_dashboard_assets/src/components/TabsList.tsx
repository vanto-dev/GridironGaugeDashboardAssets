import * as React from "react"
import {Tab, Tabs, Box } from "@mui/material"
import TabContext from "@mui/lab/TabContext"
import TabPanel from "@mui/lab/TabPanel"
import PlayerGrid from "./PlayerGrid"
import {test_RBData} from "../test_data/test_RBData"
import {test_WRData} from "../test_data/test_WRData"
import {test_TEData} from "../test_data/test_TEData"
import {test_QBData} from "../test_data/test_QBData"

export default function TabsList() {
  const [value, setValue] = React.useState("1")

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (

    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex",
        justifyContent: "center",
        alignItems: "center", }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab value="1" label="QB" style={{ color: "red" }} />
          <Tab value="2" label="RB" style={{ color: "green" }} />
          <Tab value="3" label="WR" style={{ color: "yellow" }} />
          <Tab value="4" label="TE" style={{ color: "#03fcfc" }} />
        </Tabs>
      </Box>
      <TabPanel value="1">
        <Box sx={{
          width: "100%", typography: "body1"
        }}>
          <PlayerGrid  playerData={test_QBData}/>
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <Box sx={{
          width: "100%", typography: "body1"
        }}>
          <PlayerGrid  playerData={test_RBData}/>
        </Box>
      </TabPanel>
      <TabPanel value="3">
        <Box sx={{
          width: "100%", typography: "body1"
        }}>
          <PlayerGrid  playerData={test_WRData}/>
        </Box>
      </TabPanel>

      <TabPanel value="4">
        <Box sx={{
          width: "100%", typography: "body1"
        }}>
          <PlayerGrid  playerData={test_TEData}/>
        </Box>
      </TabPanel>
    </TabContext>

  )
}