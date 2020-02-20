import React, { useContext } from "react";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

// Table Components
import { Container } from "./TableComponents/Container";
import { TableOne } from "./TableComponents/TableOne";
import { Head } from "./TableComponents/Head";
import { ScrollDiv } from "./TableComponents/ScrollDiv";
import { TableTwo } from "./TableComponents/TableTwo";
import { Body } from "./TableComponents/Body";
import { Row } from "./TableComponents/Row";

// Functions
import { getGrid } from "../../Functions/getGrid";
import { getColWidth } from "../../Functions/getColWidth";

const Table = props => {
  const value = useContext(ResponsiveContext);

  return (
    <Container style={getGrid(props.page, value.innerWidth)}>
      <TableOne>
        <Head>
          <tr>
            {props.columns.map(col => {
              return (
                <th
                  key={col}
                  scope="col"
                  style={{ width: getColWidth(props.columns) }}
                >
                  {col}
                </th>
              );
            })}
          </tr>
        </Head>
      </TableOne>
      <ScrollDiv>
        <TableTwo>
          <Body>
            {props.rows.map(row => {
              return (
                <Row key={Math.random()}>
                  {row.map(cell => (
                    <td key={Math.random()}>{cell}</td>
                  ))}
                </Row>
              );
            })}
            <tr>
              <td />
            </tr>
          </Body>
        </TableTwo>
      </ScrollDiv>
    </Container>
  );
};

export default Table;
