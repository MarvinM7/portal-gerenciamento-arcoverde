import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import { Box, Typography } from "@material-ui/core";

function ReplaceImage(imgPath) {
  const [hover, setHover] = useState(true);
  const [imgHover, setImgHover] = useState(false);
  const img_onMouseEnter = () => { setImgHover(true); };
  const img_onMouseLeave = () => { setImgHover(false); };

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
      { 
        hover ? 
        <div onMouseEnter={img_onMouseEnter} onMouseLeave={img_onMouseLeave}>
          { imgHover? 
            <div>
              <p style={{position: 'absolute', marginTop: '38%', marginLeft: '10%', color: '#06933C'}}>Adicionar imagem</p>
              <AccountCircleIcon style={{color: 'white', fontSize: '249px'}}/>
            </div> : ''
          }
          { !imgHover? <AccountCircleIcon style={{color: 'grey', fontSize: '249px'}}/> : '' }
        </div> : <img alt="Pressione a imagem para alterá-la" src={imgPath.props} style={{maxWidth: '207px', maxHeight: '207px'}}> </img> 
      }
    </IconButton>
  );
}

export default ReplaceImage;
