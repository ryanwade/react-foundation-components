import React from 'react';
import { Components } from 'react-foundation-lib';

let { Column, Row } = Components;


// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <Row>
      <Column>
        <h2>About</h2>
        <p>
          Foundation Components built using React and Redux
        </p>
      </Column>
    </Row>
  );
};

export default AboutPage;
