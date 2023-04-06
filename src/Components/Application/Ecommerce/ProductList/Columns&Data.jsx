import React from 'react';
import { Btn, H6, Image } from '../../../../AbstractElements';
import product1 from '../../../../assets/images/ecommerce/product-table-1.png'
import product2 from '../../../../assets/images/ecommerce/product-table-2.png';
import product3 from '../../../../assets/images/ecommerce/product-table-3.png';
import product4 from '../../../../assets/images/ecommerce/product-table-4.png';
import product5 from '../../../../assets/images/ecommerce/product-table-5.png';
import product6 from '../../../../assets/images/ecommerce/product-table-6.png';

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 100, fontSize: 14, padding: 4, minWidth:100 };
export const certificateData = [
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Bengaluru</H6>

      </div>
    ),
    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>In-active</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product4, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Chennai</H6>

      </div>
    ),


    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>In-active</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product2, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Mumbai</H6>

      </div>
    ),


    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Active </Btn>
        {/* </span> */}
      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Hydrabad</H6>

      </div>
    ),
    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>In-active</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product4, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Kolkata</H6>

      </div>
    ),


    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>In-active</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product2, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Punjab</H6>

      </div>
    ),


    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Active </Btn>
        {/* </span> */}
      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Gujrat</H6>

      </div>
    ),
    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>In-active</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product4, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Dhaka</H6>

      </div>
    ),


    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>In-active</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product2, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Kolkata</H6>

      </div>
    ),


    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Active </Btn>
        {/* </span> */}
      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Sylhet</H6>

      </div>
    ),
    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>In-active</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product4, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Kolkata</H6>

      </div>
    ),


    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>In-active</Btn>
        {/* </span> */}

      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  {
    // image: <Image attrImage={{ src: product2, style: style, alt: '' }} />,
    location: (
      <div>
        <H6>Chittagong</H6>

      </div>
    ),


    start_date: '01 Aug, 2022, 12.53 PM IST',
    action: (
      <div>
        {/* <span> */}
          <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Active</Btn>
        {/* </span> */}
      </div>
    ),
    action2: (
      <div>
        <span>
          <input type={'CheckBox'}/> 
        </span>
      </div>
    )
  },
  // {
  //   image: <Image attrImage={{ src: product3, style: style, alt: '' }} />,
  //   location: (
  //     <div>
  //       <H6>Black Lipstick</H6>
  //       <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
  //     </div>
  //   ),
  //   amount: '$10',
  //   stock: <div className='font-success'>In Stock</div>,
  //   start_date: '01 Aug, 2022, 12.53 PM IST',
  //   action: (
  //     <div>
  //       <span>
  //         <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delete</Btn>
  //       </span>{' '}
  //       &nbsp;&nbsp;
  //       <span>
  //         <Btn attrBtn={{ style: style2, color: 'success', className: 'btn btn-xs', type: 'button' }}>Edit </Btn>
  //   //       </span>
  //       </div>
  //     ),
  //   },
];
export const certificateColumns = [
  // {
  //   name: 'Image',
  //   selector: (row) => row.image,
  //   sortable: true,
  //   center: true,
  //   minWidth: '100px',
  //   maxWidth: '100px',
  // },
  {
    name: 'Certificate Name',
    selector: (row) => row.location,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
    maxWidth: '400px'
  },
  // {
  //   name: 'Amount',
  //   selector: (row) => row.amount,
  //   sortable: true,
  //   center: true,
  //   minWidth: '100px',
  //   maxWidth: '150px',
  // },
  // {
  //   name: 'Stock',
  //   selector: (row) => row.stock,
  //   sortable: true,
  //   center: true,
  //   minWidth: '120px',
  //   maxWidth: '150px',
  // },
  {
    name: 'Created Date',
    selector: (row) => row.start_date,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Status',
    selector: (row) => row.action,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Action',
    selector: (row) => row.action2,
    sortable: true,
    center:true,
    sortable: true,
    
    // minWidth: '160px',
    // maxWidth: '160px',
  },

];


export const PreferedColumns = [
  // {
  //   name: 'Image',
  //   selector: (row) => row.image,
  //   sortable: true,
  //   center: true,
  //   minWidth: '100px',
  //   maxWidth: '100px',
  // },
  {
    name: 'Location',
    selector: (row) => row.location,
    sortable: true,
    center: false,
    // wrap: true,
    minWidth: '400px',
    maxWidth: '400px'
  },
  // {
  //   name: 'Amount',
  //   selector: (row) => row.amount,
  //   sortable: true,
  //   center: true,
  //   minWidth: '100px',
  //   maxWidth: '150px',
  // },
  // {
  //   name: 'Stock',
  //   selector: (row) => row.stock,
  //   sortable: true,
  //   center: true,
  //   minWidth: '120px',
  //   maxWidth: '150px',
  // },
  {
    name: 'Created Date',
    selector: (row) => row.start_date,
    sortable: true,
    center: true,
    sortable: true,
    // minWidth: '120px',
    // maxWidth: '150px',
  },
  {
    name: 'Status',
    selector: (row) => row.action,
    sortable: true,
    center:true,
    sortable: true,
    // minWidth: '200px',
    // maxWidth: '200px',
  },
  {
    name: 'Action',
    selector: (row) => row.action2,
    sortable: true,
    center:true,
    sortable: true,
    
    // minWidth: '160px',
    // maxWidth: '160px',
  },

];
