import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import PlayerEntry from "./PlayerEntry"

export default function PlayerGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} columns={28}>
        <Grid xs={6} md={4}>
          <PlayerEntry playerName={"Bijan Robinson"} playerPhoto={"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430807.png&w=350&h=254"} playerScore={"9.84"}/>
        </Grid>
        <Grid xs={6} md={4}>
          <PlayerEntry playerName={"Bijan Robinson"} playerPhoto={"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430807.png&w=350&h=254"} playerScore={"9.84"}/>
        </Grid>
        <Grid xs={6} md={4}>
          <PlayerEntry playerName={"Bijan Robinson"} playerPhoto={"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430807.png&w=350&h=254"} playerScore={"9.84"}/>
        </Grid>
        <Grid xs={6} md={4}>
          <PlayerEntry playerName={"Bijan Robinson"} playerPhoto={"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430807.png&w=350&h=254"} playerScore={"9.84"}/>
        </Grid>
        <Grid xs={6} md={4}>
          <PlayerEntry playerName={"Bijan Robinson"} playerPhoto={"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430807.png&w=350&h=254"} playerScore={"9.84"}/>
        </Grid>
        <Grid xs={6} md={4}>
          <PlayerEntry playerName={"Bijan Robinson"} playerPhoto={"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430807.png&w=350&h=254"} playerScore={"9.84"}/>
        </Grid>
        <Grid xs={6} md={4}>
          <PlayerEntry playerName={"Bijan Robinson"} playerPhoto={"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430807.png&w=350&h=254"} playerScore={"9.84"}/>
        </Grid>
        <Grid xs={6} md={4}>
          <PlayerEntry playerName={"Bijan Robinson"} playerPhoto={"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430807.png&w=350&h=254"} playerScore={"9.84"}/>
        </Grid>
      </Grid>
    </Box>
  )
}