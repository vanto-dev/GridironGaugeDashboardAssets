import React from "react"
import {CardActionArea, CardContent, CardMedia, Typography, Card} from "@mui/material"


interface PlayerEntryProps {
  playerName: string,
  playerPhoto: string,
  playerScore: string,
}

const PlayerEntry: React.FC<PlayerEntryProps> = ({playerName, playerPhoto, playerScore}) => {

  return (
    <Card sx={{ backgroundColor: "#9d9d9e" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={playerPhoto} // should be updated with link/file_name sent from backend
          alt={playerName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {playerName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Overall Score: {playerScore}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PlayerEntry
