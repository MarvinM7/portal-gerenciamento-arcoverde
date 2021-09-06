import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import { Box, Typography } from "@material-ui/core";

function ReplaceImage(imgPath) {
  const [hover, setHover] = useState();

  if(!imgPath){
    setHover(true);
  }

  function invert(){
    if(hover) {
      setHover(false);
    } else {
      setHover(true);
    }
  }

  return (
    <IconButton onMouseDown={ () => invert() } >
      {hover ? <Box> <Typography variant="button"> Adicionar nova imagem </Typography> <AccountCircleIcon/> </Box>  : <img alt="Pressione na imagem para alterar a imagem" src={imgPath.props}></img>}
    </IconButton>
  );
}

export default ReplaceImage;
