import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import BalanceIcon from "@mui/icons-material/Balance";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"© "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="https://cryptorush.app/">
        CryptoRUSH.app - Gen Creations, LLC.
      </Link>
      {"."}
    </Typography>
  );
}

const cards = [];

export default function Home() {
  return (
    <Box>
      <AppBar position="relative">
        <Toolbar sx={{ display: "flex" }}>
          <BalanceIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            RUSHCopper ($RSHCP)
          </Typography>

          <div style={{ flexGrow: 1 }} />

          <Link href="https://discord.gg/JXtecYFUyP" target="_blank">
            <img
              src="/images/join-our-discord-lite.png"
              alt="CryptoRUSH Discord Channel"
              width="120"
            />
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            backgroundImage: "url(/images/hero_banner.jpg)",
            backgroundSize: "cover",
            textShadow: "#000 1px 0 20px",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              RUSHCopper - Crypto Asset for Crafters
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              A secure Proof Of Stake Cryptocurrency built to reward craft
              specialists and domain experts.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Get $RSHCP</Button>
              <Button variant="outlined">Get Involved</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          RUSHCopper - $RSHCP
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Reward your Effort!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </Box>
  );
}
