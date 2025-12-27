import { Box, Container } from '@mui/material';
import { AppBar, BoardBar } from '@mui/material';
import BoardContent from './BoardContent';
function Board() {
 return (
    <>
      <Container maxWidth={false} disableGutters sx={{
        height: '100vh'
      }}>
        <AppBar></AppBar>
        <BoardBar></BoardBar>
        <BoardContent></BoardContent>
      </Container>
    </>
  )
}

export default Board