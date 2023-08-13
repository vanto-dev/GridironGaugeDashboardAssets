import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2" // Importing from the unstable module
import PlayerEntry from "./PlayerEntry"

interface PlayerData {
    name: string;
    playerPhoto: string;
    score: string;
}

interface PlayerGridProps {
    playerData: PlayerData[];
}

const PlayerGrid: React.FC<PlayerGridProps> = ({ playerData }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {playerData.map((player, index) => (
          <Grid key={index} xs={6} sm={4} md={3} lg={2}>
            <PlayerEntry
              playerName={player.name}
              playerPhoto={player.playerPhoto}
              playerScore={player.score}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PlayerGrid
