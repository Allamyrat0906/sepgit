import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222",
      paper: "#333",
    },
  },
});

function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              background: "background.paper",
              padding: 4,
              borderRadius: 2,
              boxShadow: 4,
            }}
          >
            <Box>
              <img
                src="/logo.png"
                alt="Logo"
                style={{ width: "100%", marginBottom: 4 }}
              />
              <Typography component="h1" variant="h5" align="center">
                Sign in
              </Typography>
            </Box>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ mb: 3 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Example;

// import React, { useState } from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Grid, Paper, List, ListItem, ListItemText } from "@mui/material";

// const videos = [
//   {
//     id: 1,
//     title: "Video 1",
//     src: "video/sortVideo.mp4",
//   },
//   {
//     id: 2,
//     title: "Video 2",
//     url: "public/video/sortVideo.mp4",
//   },
//   {
//     id: 3,
//     title: "Video 3",
//     src: "public/video/sortVideo.mp4",
//   },
// ];

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#3f51b5",
//     },
//     secondary: {
//       main: "#f50057",
//     },
//     mode: "dark",
//   },
// });

// const Example = () => {
//   const [selectedVideo, setSelectedVideo] = useState(videos[0]);

//   const handleVideoSelect = (video) => {
//     setSelectedVideo(video);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={8}>
//           <Paper
//             sx={{
//               p: 2,
//               color: "text.secondary",

//               height: "100%",
//             }}
//           >
//             <div
//               style={{
//                 position: "relative",
//                 paddingBottom: "56.25%" /* 16:9 */,
//                 height: 0,
//               }}
//             >
//               <iframe
//                 title={selectedVideo.title}
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 src={selectedVideo.url}
//                 allowFullscreen
//               />
//             </div>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Paper sx={{ p: 2, color: "text.secondary", height: "100%" }}>
//             <List>
//               {videos.map((video) => (
//                 <ListItem
//                   button
//                   selected={video.id === selectedVideo.id}
//                   onClick={() => handleVideoSelect(video)}
//                 >
//                   <ListItemText primary={video.title} />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// };

// export default Example;
