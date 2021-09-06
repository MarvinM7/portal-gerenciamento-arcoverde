import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import { Box, Typography } from "@material-ui/core";

function ReplaceImage(imgPath) {
  const [hover, setHover] = useState(false);

  return (
    <IconButton onMouseOver={ () => setHover(true) } onMouseLeave={ () => setHover(false) } onMouseOut={ () => setHover(false) }>
      {hover ? <Box> <Typography variant="button"> Adicionar imagem </Typography> <AccountCircleIcon/> </Box>  : <img src={imgPath.props}></img>}
    </IconButton>
  );
}

export default ReplaceImage;
