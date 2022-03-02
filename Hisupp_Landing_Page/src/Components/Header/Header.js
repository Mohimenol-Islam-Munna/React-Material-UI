import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SpaIcon from "@mui/icons-material/Spa";
import { Typography } from "@mui/material";

import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <>
      <HeaderTop></HeaderTop>
      <Box>
        <Container>
          <Grid container p={2}>
            <Grid item xs>
              <IconButton>
                <SpaIcon className="logo_color" />
                <Typography ml={2}>HISUPP</Typography>
              </IconButton>
            </Grid>

            <Grid
              item
              container
              xs={10}
              alignItems={"center"}
              columnSpacing={3}
              justifyContent={"flex-end"}
            >
              <Grid item>
                <Typography>Home</Typography>
              </Grid>
              <Grid item>
                <Typography>Ingredient</Typography>
              </Grid>
              <Grid item>
                <Typography>Supplement</Typography>
              </Grid>
              <Grid item>
                <Typography>Pricing</Typography>
              </Grid>
              <Grid item>
                <Typography>Introduction</Typography>
              </Grid>
              <Grid item>
                <Typography>Blog</Typography>
              </Grid>
              <Grid item>
                <Typography>Contact</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" size="large">
                  Purchase Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
