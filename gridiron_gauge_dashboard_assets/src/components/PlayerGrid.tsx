import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import PlayerEntry, {PlayerEntryProps} from "./PlayerEntry"

interface PlayerGridProps {
  playerData: PlayerEntryProps[];
}

const PlayerGrid: React.FC<PlayerGridProps> = ({ playerData }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1.5} columns={32}>
        {playerData.map((player, index) => (
          <Grid key={index} xs={12} sm={6} md={3} lg={4}>
            {/* Adjust the md column to distribute 4 cards on each row */}
            <PlayerEntry
              playerName={player.playerName}
              playerPhoto={player.playerPhoto}
              playerScore={player.playerScore}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PlayerGrid