import React from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card4 = () => (
  <Card cover css={{ w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h3 color="white">
          Tarantula
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/Brachypelma_smithi_2009_G03.jpg"
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
            Available soon.
          </Text>
          <Text color="#000" size={12}>
            Get notified.
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Más info.
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);





