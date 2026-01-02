import  AppBar  from '~/components/AppBar/AppBar';
import  BoardBar  from './BoardBar/BoardBar';
import  BoardContent  from './BoardContent/BoardContent';
import { Box, Container } from '@mui/material';
import { mockData } from '~/apis/mock-data'
function Board() {
 return (
    <>
      <Container maxWidth={false} disableGutters sx={{
        height: '100vh'
      }}>
        <AppBar></AppBar>
        <BoardBar board={mockData.board}></BoardBar>
        <BoardContent board={mockData.board}></BoardContent>
      </Container>
    </>
  )
}

export default Board