import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
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
  // Sort playerData based on score in descending order
  const sortedPlayerData = [...playerData].sort((a, b) => parseFloat(b.score) - parseFloat(a.score))

  return (
    <Box>
      <Grid container spacing={2}>
        {sortedPlayerData.map((player, index) => (
          <Grid key={index} item xs={4} sm={3} md={2} lg={2}>
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
