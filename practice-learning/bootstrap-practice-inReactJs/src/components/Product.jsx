import { Button, Card } from "react-bootstrap";

function Product({ title, price, image }) {
  return (
    <Card className="h-100 shadow-sm mb-2">
      <Card.Img variant="top" src={image} />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>

        <Button variant="primary" className="mt-auto">
          افزودن به سبد خرید
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
