import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";

import "./Header.css";

const HeaderTop = () => {
  return (
    <Box bgcolor={"#573abd"} p={2}>
      <Container>
        <Grid container>
          {/* icons  */}
          <Grid
            item
            container
            sm={8}
          >
            <IconButton item>
              <FacebookIcon className="icon_color" />
            </IconButton>

            <IconButton item>
              {" "}
              <TwitterIcon className="icon_color" />
            </IconButton>

            <IconButton item>
              {" "}
              <YouTubeIcon className="icon_color" />
            </IconButton>

            <IconButton item>
              {" "}
              <FacebookIcon className="icon_color" />
            </IconButton>

            <IconButton item>
              {" "}
              <InstagramIcon className="icon_color" />
            </IconButton>

            <IconButton item>
              {" "}
              <LinkedInIcon className="icon_color" />
            </IconButton>
          </Grid>

          {/* info  */}
          <Grid
            item
            container
            sm={4}
            alignItems="center"
          >
            <Grid item md={6} borderRight="2px solid gray" p={1}>
              <Typography color="white">munna@gmail.com</Typography>
            </Grid>
            <Grid item md={6} textAlign="center" p={1}>
              <Typography color="white">+012345678</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeaderTop;
