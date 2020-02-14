import React, { useContext } from "react";
import styled from "styled-components";
import { getColWidth } from "../Functions/getColWidth";
import { ResponsiveContext } from "../Context/ResponsiveContext";

const Container = styled.div`
  display: block;
  border: 1px solid #54668e;
  background-color: #e8e8e8;
`;

const TableOne = styled.table`
  width: 100%;
  border-bottom: 1px solid #54668e;
  padding: 2.5vh 0;
`;

const TableTwo = styled.table`
  table-layout: fixed;
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  text-align: center;
`;

const Head = styled.thead`
  height: 100%;
`;

const Body = styled.tbody`
  height: 100%;
`;

const Row = styled.tr`
  height: 5vh;
  width: 100%;
`;

const ScrollDiv = styled.div`
  height: 90%;
  overflow: auto;
`;

function getGrid(page, width) {
  if (width <= 600 && page === "Dashboard") {
    return {
      gridColumn: "1 / 11",
      gridRow: "5 / 11",
      marginBottom: "2.5vh"
    };
  } else if (width <= 600 && page === "Upload") {
    return {
      gridColumn: "1 / 11",
      gridRow: "4 / 9",
      marginBottom: "2.5vh"
    };
  } else if (width > 600 && page === "Dashboard") {
    return {
      gridColumn: "2 / 10",
      gridRow: "3 / 11",
      marginBottom: "2.5vh"
    };
  } else if (width > 600 && page === "Upload") {
    return {
      gridColumn: "2 / 10",
      gridRow: "3 / 9",
      marginBottom: "2.5vh"
    };
  }
}

const Table = props => {
  const value = useContext(ResponsiveContext);
  return (
    <Container style={getGrid(props.page, value.innerWidth)}>
      <TableOne>
        <Head>
          <tr>
            {props.columns.map(col => {
              return (
                <th scope="col" style={{ width: getColWidth(props.columns) }}>
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
                <Row>
                  {row.map(cell => (
                    <td>{cell}</td>
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
