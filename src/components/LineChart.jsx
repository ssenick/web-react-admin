import React from 'react';
import {useMediaQuery, useTheme} from "@mui/material";
import {ResponsiveLine} from '@nivo/line';
import {tokens} from "../theme";

const LineChart = ({data, isDashboard = false}) => {
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)

   return (
      <ResponsiveLine
         data={data}
         theme={{
            axis: {
               domain: {
                  line: {
                     stroke: colors.grey[100]
                  }
               },
               legend: {
                  text: {
                     fill: colors.grey[100]
                  }
               },
               ticks: {
                  line: {
                     stroke: colors.grey[100],
                     strokeWidth: 1
                  },
                  text: {
                     fill: colors.grey[100]
                  }
               }
            },
            legends: {
               text: {
                  fill: colors.grey[100]
               }
            },
            tooltip: {
               container: {
                  color: colors.primary[500]
               }
            }

         }}
         colors={{scheme:'nivo'}}
         margin={isDashboard || !isNonMobil ? {top: 10, right: 30, bottom: 30, left: 30} : {top: 30, right: 30, bottom: 50, left: 50}}
         xScale={{type: 'point'}}
         yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
         }}
         yFormat=" >-.2f"
         curve="catmullRom"
         axisTop={null}
         axisRight={null}
         axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard || !isNonMobil ? undefined : 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
         }}
         axisLeft={{
            tickValues: 5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard || !isNonMobil ? undefined : 'count',
            legendOffset: -40,
            legendPosition: 'middle'
         }}
         enableGridX={false}
         enableGridY={false}
         pointSize={10}
         pointColor={{theme: 'background'}}
         pointBorderWidth={2}
         pointBorderColor={{from: 'serieColor'}}
         pointLabelYOffset={-12}
         useMesh={true}
      />
   );
};

export default LineChart;