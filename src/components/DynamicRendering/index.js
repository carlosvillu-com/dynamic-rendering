import React from 'react'
import PropTypes from 'prop-types'

import PerfDynamicRendering from '@schibstedspain/react-perf-dynamic-rendering'

const DynamicRendering = ({children, forceRender, height}, {device}) => (
  <PerfDynamicRendering
    userAgent={device.userAgent}
    forceRender={forceRender}
    height={height}
  >
    {children}
  </PerfDynamicRendering>
)

DynamicRendering.propTypes = {
  children: PropTypes.object,
  forceRender: PropTypes.object,
  height: PropTypes.object
}

DynamicRendering.contextTypes = {
  device: PropTypes.object
}

export default DynamicRendering
