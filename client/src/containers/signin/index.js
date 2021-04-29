import React from 'react'
import Layout from '../../components/layout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'

const Signin = () => {
  return (
    <Layout>
      <Container style={{ margin: '5rem' }}>
        <Row style={{ margin: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                placeholder="Email"
                label="Email"
                type="email"
                onChange={() => {}}
              />

              <Input
                placeholder="Password"
                label="Password"
                type="password"
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Signin
