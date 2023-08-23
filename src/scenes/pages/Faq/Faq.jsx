import React from 'react';
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {tokens} from "../../../theme";
import Header from "../../../components/Header";

const faqContent = [
   {
      title: 'General settings',
      subtitle: 'I am an accordion',
      details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.'
   },
   {
      title: 'Users',
      subtitle: 'You are currently not an owner',
      details: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
   },
   {
      title: 'Advanced settings',
      subtitle: 'Filtering has been entirely disabled for whole web server',
      details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sitamet egestas eros, vitae egestas augue. Duis vel est augue.'
   },
   {
      title: 'Personal data',
      details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.'
   }

]

const Faq = () => {
   const isNonMobil = useMediaQuery('(min-width:680px)');
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)



   return (
      <Box m={isNonMobil ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='FAQ' subtitle='Frequently asked questions'/>
         <Box>
            {faqContent && faqContent.map((item,index)=>
               <Accordion key={item.title}
               sx={{
                  '& .MuiAccordionSummary-content': {
                     gap: '15px',
                     flexDirection: `${isNonMobil ? undefined : 'column'}`
                  }
               }}
               >
                  <AccordionSummary
                     expandIcon={<ExpandMoreOutlinedIcon/>}
                     sx={{backgroundColor: colors.primary[400]}}
                  >
                     <Typography sx={{width: '33%', flexShrink: 0, fontWeight: 'bold', color: colors.grey[100]}}>
                        {item.title}
                     </Typography>
                     {item.subtitle &&  <Typography sx={{color: colors.grey[200]}}>{item.subtitle}</Typography> }
                  </AccordionSummary>
                  <AccordionDetails
                     sx={{backgroundColor: colors.primary[400]}}>
                     <Typography>
                        {item.details}
                     </Typography>
                  </AccordionDetails>
               </Accordion>
            )}

         </Box>
      </Box>
   );
};

export default Faq;