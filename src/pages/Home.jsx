import React from 'react'
import { Card, Col, Row, Button, } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/wishListSlice'
import { addToCart } from '../redux/cartslice'



function Home() {
  const data = useFetch('https://dummyjson.com/products')
  const dispatch =useDispatch()
  console.log(data);
  return (
    
    <Row className='mb-5 ms-5 ' style={{marginTop:'100px'}}>
     {
      data?.length>0?data?.map((products,index)=>{
       return (
       <Col sm={12} md={6} lg={4} xl={3} key={index} className='mt-5' >

        <Card style={{ width: '18rem',height:'29rem' }} className='shadow rounded'>
          <Card.Img variant="top" src={products.thumbnail} height={'200px'}/>
          <Card.Body>
            <Card.Title >{products?.title.slice(0,20)}</Card.Title>
            <Card.Text>
             <p> {products?.description.slice(0,40)}...</p>
             <p className='fw-bolder'>$ { products?.price}</p>
            </Card.Text>
            <div className='d-flex justify-content-between'>

              <Button className='btn btn-light fs-4' onClick={()=>dispatch(addToWishlist(products))}><i className='fa-solid fa-heart text-primary '></i></Button>
              <Button className='btn btn-light w-25 fs-4' onClick={()=>dispatch(addToCart(products))}><i className='fa-solid fa-shopping-cart text-success '></i></Button>
            </div>

          </Card.Body>
        </Card>

      </Col>)
      }):(<p className='fw-bolder '>Nothing to display</p>)
     }
    </Row>
  )
}

export default Home