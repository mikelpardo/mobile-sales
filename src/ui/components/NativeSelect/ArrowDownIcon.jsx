import React from 'react'
import PropTypes from 'prop-types'

export const ArrowDownIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 30 12">
    <path d="M28.84 0L30 1.3l-12.1 9.63a4.46 4.46 0 0 1-5.8 0L0 1.3 1.16 0l12.1 9.63a2.7 2.7 0 0 0 3.47 0z" />
  </svg>
)

ArrowDownIcon.propTypes = {
  className: PropTypes.string
}
