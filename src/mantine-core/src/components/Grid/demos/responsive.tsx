import React from 'react';
import { Grid } from '../Grid';
import { ColWrapper as Col } from './ColWrapper';

const code = `
<Grid>
  <Grid.Col span={12} md={6} lg={3}>1</Grid.Col>
  <Grid.Col span={12} md={6} lg={3}>2</Grid.Col>
  <Grid.Col span={12} md={6} lg={3}>3</Grid.Col>
  <Grid.Col span={12} md={6} lg={3}>4</Grid.Col>
</Grid>
`;

function Demo() {
  return (
    <Grid>
      <Col span={12} md={6} lg={3}>
        1
      </Col>
      <Col span={12} md={6} lg={3}>
        2
      </Col>
      <Col span={12} md={6} lg={3}>
        3
      </Col>
      <Col span={12} md={6} lg={3}>
        4
      </Col>
    </Grid>
  );
}

export const responsive: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
