import React from 'react';
import {ResponsiveBar} from '@nivo/bar'
import {useMediaQuery, useTheme} from "@mui/material";
import {tokens} from "../theme";

const BarChart = ({data, isDashboard = false}) => {
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   return (
      <ResponsiveBar
         data={data}
         theme={{
            axis: {
               domain: {
                  line: {
                     stroke: colors.grey[100]
                  }
               },
               legend: {
                  line: {
                     stroke: colors.grey[100]
                  },
                  text: {
                     fill: colors.grey[100]
                  }
               },
               ticks: {
                  line: {
                     stroke: colors.grey[100],

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
            }
         }}
         keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
         ]}

         indexBy="country"
         margin={isNonMobil ? {top: 20, right: 120, bottom: 20, left: 50} : {top: 10, right: 10, bottom: 10, left: 10}}
         padding={0.3}
         valueScale={{type: 'linear'}}
         indexScale={{type: 'band', round: true}}
         colors={{scheme: 'nivo'}}
         enableLabel={false}
         enableGridX={true}
         defs={[
            {
               id: 'dots',
               type: 'patternDots',
               background: 'inherit',
               color: '#38bcb2',
               size: 4,
               padding: 1,
               stagger: true
            },
            {
               id: 'lines',
               type: 'patternLines',
               background: 'inherit',
               color: '#eed312',
               rotation: -45,
               lineWidth: 6,
               spacing: 10
            }
         ]}
         fill={[
            {
               match: {
                  id: 'fries'
               },
               id: 'dots'
            },
            {
               match: {
                  id: 'sandwich'
               },
               id: 'lines'
            }
         ]}
         borderColor={{
            from: 'color',
            modifiers: [
               [
                  'darker',
                  1.6
               ]
            ]
         }}
         axisTop={null}
         axisRight={null}
         axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'country',
            legendPosition: 'middle',
            legendOffset: 32
         }}
         axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'food',
            legendPosition: 'middle',
            legendOffset: -40
         }}
         labelSkipWidth={12}
         labelSkipHeight={12}
         labelTextColor={{
            from: 'color',
            modifiers: [
               [
                  'darker',
                  1.6
               ]
            ]
         }}
         legends =  {isNonMobil && !isDashboard ? [
            {
               dataFrom: 'keys',
               anchor: 'bottom-right',
               direction: 'column',
               justify: false,
               translateX: 120,
               translateY: 0,
               itemsSpacing: 2,
               itemWidth: 100,
               itemHeight: 20,
               itemDirection: 'left-to-right',
               itemOpacity: 0.85,
               symbolSize: 20,
               effects: [
                  {
                     on: 'hover',
                     style: {
                        itemOpacity: 1
                     }
                  }
               ]
            }
         ] : []}
         role="application"
         ariaLabel="Nivo bar chart demo"
         barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
      />

   );
};

export default BarChart;