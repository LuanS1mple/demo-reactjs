import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import ListColumns from './ListColumns/ListColumns';
import {mapOrder } from '~/ulties/sorts'
import { 
  DndContext,
  PointerSensor,
  useSensor,
  MouseSensor,
  TouchSensor,
  useSensors
} from '@dnd-kit/core';
import {
  arrayMove,
} from '@dnd-kit/sortable';

function BoardContent({board}) {
  // const pointerSensor = useSensor(PointerSensor, {activationConstraint: {distance: 10}})
  const mouseSensor = useSensor(MouseSensor, {activationConstraint: {distance: 10}})
  const touchSensor = useSensor(TouchSensor, {activationConstraint: {delay: 250, tolerance: 5 }})

  // const sensors = useSensors(pointerSensor)
  const sensors = useSensors(mouseSensor,touchSensor)

  const [orderedColumns, setOrderedColumns] = React.useState([])
  React.useEffect(()=> {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds,'_id'))
  }, [board])
  const handleDragEnd = (event) => {
    const {active, over} = event

    if(!over) return
    if(active.id !== over.id){
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnIds = dndOrderedColumns.map(c => c._id)
      setOrderedColumns(dndOrderedColumns)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors} >
      <Box sx={{
            // backgroundColor:'green',
            height:(theme) => theme.boardContentHeight,
            display: 'flex',
            alignItems: 'center',
            width:'100%',
            p: '10px 0'
          }}>
        <ListColumns columns={orderedColumns}></ListColumns>
      </Box>
    </DndContext>

  )
}

export default BoardContent