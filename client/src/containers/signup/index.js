import React from 'react'
import Layout from '../../components/layout'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Signup = () => {
  return (
    <Layout>
      <Container style={{ margin: '5rem' }}>
        <Row style={{ margin: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md = {6}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="FirstName" />
                  </Form.Group>
                </Col>
                <Col md = {6}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="FirstName" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
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
