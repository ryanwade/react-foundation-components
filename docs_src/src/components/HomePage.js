import React from 'react';
import { Components, Enums } from 'react-foundation-lib';

let { Column, Row } = Components;

const HomePage = () => {
  return (
    <Row>
      <Column>
        <h3>Enums</h3>
      </Column>
      {Object.keys(Enums).map((key) => (
        <Column large={3} key={key}>
          <h5>{key}</h5>
          <ul>
            {Object.keys(Enums[key]).map((name) => <li key={name}>{name}</li>)}
          </ul>
        </Column>
      ))}
      <Column>
        <h3>Components</h3>
      </Column>
      {Object.keys(Components).map((key) => (
        <Column large={6} key={key}>
          <h5>{key}</h5>
          <ul>
            {Object.keys(Components[key].propTypes).map((prop) => {
              let d = Components[key].defaultProps[prop];
              let t = Components[key].propTypes[prop];
              return (
                <li key={prop}>{prop}: {t} {d? (": " + d) : ""}</li>
              );
            })}
          </ul>
        </Column>
      ))}
    </Row>
  );
};


export default HomePage;
