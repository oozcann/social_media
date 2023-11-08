import {Stack,Box} from '@mui/material';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';
function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction='row' spacing={2}>
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
    </Stack>
    <Add></Add>
    </Box>
  );
}

export default App;
