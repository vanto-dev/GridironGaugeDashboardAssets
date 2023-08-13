import React from "react"
import {CardActionArea, CardContent, CardMedia, Typography, Card} from "@mui/material"



export default function PlayerEntry() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430807.png&w=350&h=254" // should be updated with link/file_name sent from backend
          alt="Bijan Robinson"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bijan Robinson is the best
          </Typography>
          <Typography variant="body2" color="text.secondary">
            He's Him
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
