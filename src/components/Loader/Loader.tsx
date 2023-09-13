import { memo } from 'react'

import { Row, Spinner } from 'react-bootstrap'

export const Loader = memo(() => {
  return (
    <Row className="justify-content-center mt-5">
      <Spinner animation="border" variant="secondary" />
    </Row>
  )
})
