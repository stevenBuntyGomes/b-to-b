import React, {Fragment} from 'react'
import { Breadcrumbs } from '../../../../AbstractElements';
import { Card, CardBody, Col, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap';
// import HeaderCard from '../../../Common/Component/HeaderCard';
import HeaderCard from '../../../Common/Component/HeaderCard';
import { BasicFormControl, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, Password } from '../../../../Constant';
import FooterCard from '../../../Forms/FormControl/Common/FooterCard';
import { CardFooter } from 'reactstrap'
import { Btn } from "../../../../AbstractElements";

const CreateCertificate = () => {
  return (
   <Fragment>
        <Breadcrumbs parent="Ecommerce" title="Create Certificate" mainTitle="Create Certificate" />
        <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="Create Certificate" />
                            <Form className="form theme-form">
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Certificate</Label>
                                                <Input className="form-control" type="text" placeholder="Enter certificate name" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col>
                                            <div>
                                                <Label>Certificate Description</Label>
                                                <Input type="textarea" className="form-control" rows="3" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect9">Status</Label>
                                                <Input type="select" name="select" className="form-control digits" defaultValue="1">
                                                    <option>{'Active'}</option>
                                                    <option>{'Inactive'}</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-end">
                                    <Btn attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >Save</Btn>
                                    <Btn attrBtn={{ color: "secondary", type: "submit" }} >Reset</Btn>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
    </Fragment>
  )
}

export default CreateCertificate