import  AppBar  from '~/components/AppBar/AppBar';
import  BoardBar  from './BoardBar/BoardBar';
import  BoardContent  from './BoardContent/BoardContent';
import { Box, Container } from '@mui/material';

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