import React, {useState} from 'react';
import {Box, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme} from "@mui/material";
import {tokens} from "../../../theme";
import Header from "../../../components/Header";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import {formatDate} from "@fullcalendar/core";

const CalendarPage = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const isNonSmallPc = useMediaQuery('(min-width:1300px)');
   const isNonTablet = useMediaQuery('(min-width:800px)');
   const [currentEvents, setCurrentEvents] = useState([]);

   const handleDateClick = (selected) => {
      console.log(selected)
      const title = prompt('Please enter a new title for your event')
      const calendarApi = selected.view.calendar;
      calendarApi.unselect();

      if (title) {
         calendarApi.addEvent({
            id: `${selected.dateStr}-${title}`,
            title,
            start: selected.startStr,
            end: selected.endStr,
            allDay: selected.allDay
         })

      }
   }
   const handleEventClick = (selected) => {
      if (window.confirm("Delete the event ?")) selected.event.remove()
   }


   return (
      <Box m={isNonMobil ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='CONTACTS' subtitle='List of Contacts for Future Reference'/>
         <Box display={"flex"} justifyContent={"space-between"} flexDirection={!isNonSmallPc ? 'column' : undefined}
              gap='20px'>
            <Box p='20px' flex='1 1 20%' bgcolor={colors.primary[400]} borderRadius='5px'>
               <Typography variant='h4' fontWeight='bold' color={colors.grey[100]} mb='10px'>Events:</Typography>
               <List sx={!isNonSmallPc ? {
                  display: 'flex',
                  gap: '10px',
                  overflow: 'auto',
                  '&::-webkit-scrollbar': {
                     height: '5px',
                     width: '5px'
                  },
                  '&::-webkit-scrollbar-track': {
                     background: `${colors.blueAccent[700]}`,
                  },
                  '&::-webkit-scrollbar-thumb': {
                     background: `${colors.blueAccent[500]}`
                  },
               } : {
                  height: '69vh',
                  paddingRight: '15px',
                  overflow: 'auto',
                  '&::-webkit-scrollbar': {
                     height: '5px',
                     width: '5px'
                  },
                  '&::-webkit-scrollbar-track': {
                     background: `${colors.blueAccent[700]}`,
                  },
                  '&::-webkit-scrollbar-thumb': {
                     background: `${colors.blueAccent[500]}`
                  },
               }}>
                  {currentEvents && currentEvents.map((event) =>
                     <ListItem
                        key={event.id}
                        sx={{
                           backgroundColor: colors.greenAccent[500],
                           marginBottom: '7px',
                           borderRadius: '4px',
                           width: `${!isNonSmallPc ? ' 200px' : undefined}`,
                           flex: `${!isNonSmallPc ? '0 0 200px' : undefined}`,

                        }}
                     >
                        <ListItemText>
                           <Typography fontWeight='bold'>{event.title}</Typography>
                           <Typography>
                              {formatDate(event.start, {
                                 year: 'numeric',
                                 month: 'short',
                                 day: 'numeric'
                              })}
                           </Typography>
                        </ListItemText>
                     </ListItem>
                  )}
               </List>
            </Box>
            <Box flex=' 1 1 100%' sx={!isNonTablet ? {
               '.fc-toolbar': {
                  flexWrap: 'wrap',
                  gap: '10px'
               }
            }: undefined}>
               <FullCalendar
                  height={isNonSmallPc ? '75vh' : 'auto'}
                  plugins={[
                     dayGridPlugin,
                     timeGridPlugin,
                     listPlugin,
                     interactionPlugin
                  ]}
                  headerToolbar={{
                     start: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                     center: 'title'
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  select={handleDateClick}
                  eventClick={handleEventClick}
                  longPressDelay={300}
                  eventsSet={(events) => setCurrentEvents(events)}
                  initialEvents={[
                     {id: '01', title: 'Birthday Sasha', date: '2023-09-14'},
                  ]}
               />
            </Box>
         </Box>
      </Box>
   );
};

export default CalendarPage;