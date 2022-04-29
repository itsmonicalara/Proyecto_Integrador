import React from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Link} from "react-router-dom";



const CardTemplate = ({ spider }) => {

  const [open, setOpen] = React.useState(true);

  const newTo = { 
    pathname: `/item/${spider._id}`
  };
  
  return (
    <Card cover css={{ w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h3 color="white">
          {spider.name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src={spider.url}
        height={300}
        width="100%"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      blur
      css={{
        position: "absolute",
        bgBlur: "#ffffff",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            {spider.scientificName}
          </Text>
          <Text color="#000" size={12}>
            {spider.family}
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            {/* <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Más info.
              </Text>
            </Button> */}

            <Link className="cards-link" to={newTo}>
               <Text
                   css={{ color: "inherit" }}
                   size={13}
                   weight="bold"
                   transform="uppercase"
                >
                   Más info.
                 </Text>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  )
};

export default CardTemplate;





