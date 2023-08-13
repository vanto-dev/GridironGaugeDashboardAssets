import React from "react"
import { CardActionArea, CardContent, CardMedia, Typography, Card } from "@mui/material"

export interface PlayerEntryProps {
  playerName: string;
  playerPhoto: string;
  playerScore: string;
}

const PlayerEntry: React.FC<PlayerEntryProps> = ({ playerName, playerPhoto, playerScore }) => {
  const playerNameStyle = {
    fontSize: playerName.length > 15 ? "1.25rem" : "1.5rem", // Adjust the threshold and font sizes as needed
  }

  return (
    <Card sx={{ backgroundColor: "#9d9d9e" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={playerPhoto}
          alt={playerName}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" style={playerNameStyle}>
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
