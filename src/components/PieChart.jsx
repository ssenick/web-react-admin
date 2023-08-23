import React from 'react';
import {ResponsivePie} from '@nivo/pie'
import {useMediaQuery, useTheme} from "@mui/material";
import {tokens} from "../theme";

const PieChart = ({data, isDashboard = false}) => {
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   return (
      <ResponsivePie
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
                     strokeWidth: 1,
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
         margin={isNonMobil && !isDashboard ? {top: 20, right: 60, bottom: 80, left: 50} : {
            top: 20,
            right: 60,
            bottom: 30,
            left: 30
         }}
         innerRadius={0.5}
         padAngle={0.7}
         cornerRadius={3}
         activeOuterRadiusOffset={8}
         borderWidth={1}
         borderColor={{
            from: 'color',
            modifiers: [
               [
                  'darker',
                  0.2
               ]
            ]
         }}
         arcLinkLabelsSkipAngle={10}
         arcLinkLabelsTextColor={`${colors.grey[100]}`}
         arcLinkLabelsThickness={2}
         arcLinkLabelsColor={{from: 'color'}}
         arcLabelsSkipAngle={10}
         arcLabelsTextColor={{
            from: 'color',
            modifiers: [
               [
                  'darker',
                  2
               ]
            ]
         }}
         defs={[
            {
               id: 'dots',
               type: 'patternDots',
               background: 'inherit',
               color: 'rgba(255, 255, 255, 0.3)',
               size: 4,
               padding: 1,
               stagger: true
            },
            {
               id: 'lines',
               type: 'patternLines',
               background: 'inherit',
               color: 'rgba(255, 255, 255, 0.3)',
               rotation: -45,
               lineWidth: 6,
               spacing: 10
            }
         ]}
         fill={[
            {
               match: {
                  id: 'ruby'
               },
               id: 'dots'
            },
            {
               match: {
                  id: 'c'
               },
               id: 'dots'
            },
            {
               match: {
                  id: 'go'
               },
               id: 'dots'
            },
            {
               match: {
                  id: 'python'
               },
               id: 'dots'
            },
            {
               match: {
                  id: 'scala'
               },
               id: 'lines'
            },
            {
               match: {
                  id: 'lisp'
               },
               id: 'lines'
            },
            {
               match: {
                  id: 'elixir'
               },
               id: 'lines'
            },
            {
               match: {
                  id: 'javascript'
               },
               id: 'lines'
            }
         ]}
         legends={isNonMobil && !isDashboard ? [
            {
               anchor: 'bottom',
               direction: 'row',
               justify: false,
               translateX: 0,
               translateY: 40,
               itemsSpacing: 0,
               itemWidth: 76,
               itemHeight: 18,
               itemTextColor: '#999',
               itemDirection: 'left-to-right',
               itemOpacity: 1,
               symbolSize: 16,
               symbolShape: 'circle',
               effects: [
                  {
                     on: 'hover',
                     style: {
                        itemTextColor: colors.greenAccent[400]
                     }
                  }
               ]
            }
         ] : undefined}
      />
   );
};

export default PieChart;