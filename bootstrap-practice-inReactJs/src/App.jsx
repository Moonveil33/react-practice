import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import products from "./../data/products.js";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Container className="py-5 font-iransans">
        <h1 className="text-center mb-4">دوره های آموزش برنامه نویسی</h1>

        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={3} className="mb-4">
              <Product {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
