import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
import ProductTableData from './ProductTableData';
import { Card, CardBody, Col, Container, Row, CardHeader } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faExclamation, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';
import DataTable from 'react-data-table-component';
import { certificateColumns, certificateData } from './Columns&Data';

const Certificate = () => {
  return (
    <Fragment>
            <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/product-list/Dubai`} title="Certificate" mainTitle="Certificate" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="Certificate" span1="Certificate" />
                            <CardHeader className='mt-0'>
                                <Btn link = {`${API_ENDPOINT}/app/ecommerce/create-certificate/Dubai`} attrBtn={{ color: "dark", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faFile}/> Create Certificate
                                </Btn>
                                <Btn link = {`${API_ENDPOINT}/app/ecommerce/edit-product/Dubai`} attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faPenSquare}/> Edit
                                </Btn>
                                <Btn attrBtn={{ color: "danger", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faExclamation}/> Delete
                                </Btn>
                                <Btn attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >
                                    <FontAwesomeIcon className='me-2' icon={faEnvelope}/> Publish
                                </Btn>
                            </CardHeader>
                            
                            <CardBody>
                               <div className='table-responsive product-table'>
                                    <DataTable noHeader pagination paginationServer columns={certificateColumns} data={certificateData} highlightOnHover={true} striped={true} responsive={true} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
  )
}

export default Certificate