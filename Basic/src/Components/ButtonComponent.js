import React, { useState } from "react";
// components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Fab from "@mui/material/Fab";
import Slider from "@mui/material/Slider";

// icons
import Delete from "@mui/icons-material/Delete";
import Send from "@mui/icons-material/Send";
import Cart from "@mui/icons-material/AddShoppingCart";
import Add from "@mui/icons-material/Add";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

const ButtonComponent = () => {
  const [volume, setVolume] = useState(30);
  const [volumeSecond, setVolumeSecond] = useState(30);

  return (
    <div>
      <h3>Home Component</h3>

      {/* color button  */}
      <div>
        <h5>Basic Button</h5>
        <Button variant="text">Basic Button</Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => console.log("disableElevation button")}
        >
          Basic Button
        </Button>
        <Button variant="outlined">Basic Button</Button>
      </div>

      {/* color button  */}
      <div>
        <h5>Color Button</h5>
        <Button variant="text" color="error">
          Color Button
        </Button>
        <Button
          variant="contained"
          disableElevation
          color="success"
          onClick={() => console.log("disableElevation button")}
        >
          Color Button
        </Button>
        <Button variant="outlined" color="secondary">
          Color Button
        </Button>
      </div>

      {/* button sizes  */}
      <div>
        <h5>Button Sizes</h5>
        <Button variant="text" color="error" size="small">
          Button Sizes
        </Button>
        <Button
          variant="contained"
          disableElevation
          color="success"
          size="large"
          onClick={() => console.log("disableElevation button")}
        >
          Button Sizes
        </Button>
        <Button variant="outlined" color="secondary" size="medium">
          Button Sizes
        </Button>
      </div>

      {/* button with icon  */}
      <div>
        <h5>Button With Icon</h5>
        <Button variant="contained" startIcon={<Delete />}>
          Button Icon
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="medium"
          endIcon={<Send />}
        >
          Button Icon
        </Button>
      </div>

      {/* icon button */}
      <div>
        <h5>Icon Button</h5>
        <IconButton variant="contained" color="secondary">
          <Delete fontSize="small" />
        </IconButton>

        <IconButton variant="contained" color="secondary">
          <Delete fontSize="inherit" />
        </IconButton>
        <IconButton variant="outlined" color="secondary" size="medium">
          <Cart />
        </IconButton>
      </div>

      {/* loading button */}
      <div>
        <h5>Loading Button</h5>
        <LoadingButton
          loading
          variant="contained"
          color="secondary"
          aria-label="delete"
        >
          Loading Button
        </LoadingButton>

        <LoadingButton
          loading
          loadingIndicator="Coming..."
          variant="contained"
          color="success"
          aria-label="delete"
        >
          Loading Button
        </LoadingButton>

        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<Send />}
          variant="outlined"
          color="secondary"
          size="medium"
        >
          Loading Button
        </LoadingButton>
      </div>

      {/* Button Group*/}
      <div>
        <h5>Button Group</h5>
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button>ABC</Button>
          <Button>ABC</Button>
          <Button>ABC</Button>
        </ButtonGroup>
      </div>

      <div>
        <h5>Button Group munna</h5>
        <ButtonGroup
          variant="outlined"
          color="info"
          orientation="vertical"
          aria-label="outlined success button group"
        >
          <Button>ABC</Button>
          <Button>ABC</Button>
          <Button>ABC</Button>
        </ButtonGroup>
      </div>

      {/* Fab  */}
      <div>
        <h5>FAB Button</h5>

        <Fab>ABC</Fab>
        <Fab>
          <Add />
        </Fab>
        <Fab variant="extended">ABC</Fab>
      </div>

      {/* slider  */}
      <div>
        <h5>Slider (Range Input)</h5>

        <VolumeDown />
        <Slider
          aria-label="Volume"
          value={volume}
          onChange={(event, newValue) => setVolume(newValue)}
          valueLabelDisplay="auto"
        />
        <Slider
          aria-label="Volume"
          value={volumeSecond}
          onChange={(event, newValue) => setVolumeSecond(newValue)}
          valueLabelDisplay="auto"
          step={5}
          marks
          min={5}
          max={100}
        />
        <VolumeUp />
      </div>
    </div>
  );
};

export default ButtonComponent;
