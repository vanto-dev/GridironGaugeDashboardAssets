import * as React from "react"
import { Tab, Tabs, Box } from "@mui/material"
import TabContext from "@mui/lab/TabContext"
import TabPanel from "@mui/lab/TabPanel"
import PlayerGrid from "./PlayerGrid"
import { useEffect, useState } from "react"

interface PlayerData {
    name: string;
    playerPhoto: string;
    score: string;
}

export default function TabsList() {
  const [value, setValue] = React.useState("1")
  const [playerData, setPlayerData] = useState<PlayerData[]>([])

  useEffect(() => {
    callWRAPI() // Call the API on component mount
  }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const callWRAPI = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/wide_receiver_data")
      const data = await response.json()
      setPlayerData(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <TabContext value={value}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        <Box
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto", // Center horizontally
          }}
        >

        </Box>
      </TabPanel>
      <TabPanel value="2">
        <Box
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto", // Center horizontally
          }}
        >
        </Box>
      </TabPanel>
      <TabPanel value="3">
        <Box
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto", // Center horizontally
          }}
        >
          <PlayerGrid playerData={playerData} />

        </Box>
      </TabPanel>
      <TabPanel value="4">
        <Box
          sx={{
            width: "75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto", // Center horizontally
          }}
        >

        </Box>
      </TabPanel>
    </TabContext>
  )
}
