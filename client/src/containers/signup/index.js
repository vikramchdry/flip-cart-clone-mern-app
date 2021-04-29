import React from 'react'
import Layout from '../../components/layout'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input'

const Signup = () => {
  return (
    <Layout>
      <Container style={{ margin: '5rem' }}>
        <Row style={{ margin: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    placeholder="First Name"
                    label="First Name"
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    placeholder="Last Name"
                    label="Last Name"
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
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

export default Signup
