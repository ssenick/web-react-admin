import React from 'react';
import {ResponsiveChoropleth} from '@nivo/geo'
import {useMediaQuery, useTheme} from "@mui/material";
import {tokens} from "../theme";
import {geoFeatures} from "../data/mockGeoFeature";

const GeoChart = ({data, isDashboard = false}) => {
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   return (
      <ResponsiveChoropleth
         data={data}
         features={geoFeatures.features}
         margin={{top: 0, right: 0, bottom: 0, left: 0}}
         domain={[0, 1000000]}
         unknownColor="#666666"
         label="properties.name"
         valueFormat=".2s"
         projectionTranslation={[0.5, 0.5]}
         projectionRotation={[0, 0, 0]}
         projectionScale={isDashboard || !isNonMobil ? 50 : 150}
         borderWidth={1.5}
         borderColor="#fffff"


         legends={isDashboard || isNonMobil ? [
            {
               anchor: 'bottom-left',
               direction: 'column',
               justify: true,
               translateX: 20,
               translateY: -100,
               itemsSpacing: 0,
               itemWidth: 94,
               itemHeight: 18,
               itemDirection: 'left-to-right',
               itemTextColor: '#444444',
               itemOpacity: 0.85,
               symbolSize: 18,
               effects: [
                  {
                     on: 'hover',
                     style: {
                        itemTextColor: '#000000',
                        itemOpacity: 1
                     }
                  }
               ]
            }
         ] : undefined}
      />
   );
};

export default GeoChart;