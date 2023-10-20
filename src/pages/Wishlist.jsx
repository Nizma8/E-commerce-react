import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/wishListSlice";
import { addToCart } from "../redux/cartslice";

function Wishlist() {
  const wishListArray = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  const addtoCartFromWishlist = (products) => {
    dispatch(addToCart(products));
    dispatch(removeFromWishlist(products.id));
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <Row className="mb-5 ms-5">
        {wishListArray.length > 0 ? (
          wishListArray.map((products, index) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={index} className="mt-5">
                <Card
                  style={{ width: "18rem", height: "29rem" }}
                  className="shadow rounded"
                >
                  <Card.Img
                    variant="top"
                    src={products.thumbnail}
                    height={"200px"}
                  />
                  <Card.Body>
                    <Card.Title>{products?.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      <p> {products?.description.slice(0, 40)}...</p>
                      <p className="fw-bolder">$ {products?.price}</p>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        className="btn btn-light fs-4"
                        onClick={() => {
                          dispatch(removeFromWishlist(products.id));
                        }}
                      >
                        <i className="fa-solid fa-trash text-primary "></i>
                      </Button>
                      <Button
                        onClick={() => {
                          addtoCartFromWishlist(products);
                        }}
                        className="btn btn-light w-25 fs-4"
                      >
                        <i className="fa-solid fa-shopping-cart text-success "></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <p>Your wishlist is empty!!!</p>
        )}
      </Row>
    </div>
  );
}

export default Wishlist;
