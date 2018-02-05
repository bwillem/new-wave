import React from 'react'
import { 
  View,
  Text,
} from 'react-native'
import styled from 'styled-components'

import Colors from '../constants/Colors'

export const StyledMapOverlay = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  shadow-color: black;
  shadow-offset: { height: -3 };
  shadow-opacity: 0.1;
  shadow-radius: 3;
  background-color: ${ Colors.backroundBlack };
  padding-vertical: 16
`
export const OverlayInfo = styled.Text`
  color: #fff
`

export default class MapOverlay extends React.Component {

  getKnots = speed => {
    return (speed !== 0 || -1) ? 0 : speed * 1.94384 
  }

  getHeading = heading => {
    return heading ? heading + ' º' : '...'
  }

  getCMG = speed => {
    return '...'
  }

  render() {
    const {
      speed,
      heading,
    } = this.props

    console.log(this.props)
    return (
      <StyledMapOverlay>
        <OverlayInfo>
          { this.getKnots(speed) + ' GPS speed' }
          { this.getHeading(heading) + ' heading' }
          { this.getCMG(speed) + ' CMG' }
        </OverlayInfo>
      </StyledMapOverlay>
    )
  }
}

// mapOverlay: {
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   right: 0,
//   ...Platform.select({
//     ios: {
//       shadowColor: 'black',
//       shadowOffset: { height: -3 },
//       shadowOpacity: 0.1,
//       shadowRadius: 3,
//     },
//     android: {
//       elevation: 20,
//     },
//   }),
//   alignItems: 'center',
//   backgroundColor: '#fbfbfb',
//   paddingVertical: 20,
// },
// tabBarInfoText: {
//   fontSize: 17,
//   color: 'rgba(96,100,109, 1)',
//   textAlign: 'center',
// },