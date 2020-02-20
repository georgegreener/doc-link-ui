import React, { useContext, useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import Graph from "../../Components/Graph";
import ComparisonCard from "../../Components/ComparisonCard/ComparisonCard";
import { ResponsiveContext } from "../../Context/ResponsiveContext";
import { Data } from "../../Data/Data";

const ProjectPage = props => {
  const value = useContext(ResponsiveContext);
  const [getArray, setArray] = useState([]);
  const [counter, changeCounter] = useState(0);
  const [data, setData] = useState(null);
  let array = [];
  const [arrayHook, setArrayHook] = useState([]);

  const [getGroup, setGroup] = useState(0);

  const [showComponent, changeShowComponent] = useState(false);

  const GraphContainer = styled.div`
    display: block;
    border-right: 1px solid #54668e;
    border-bottom: 1px solid #54668e;
    border-left: 1px solid #54668e;
    background-color: #e8e8e8;
    ${props =>
      props.value.innerWidth <= 600 &&
      css`
        grid-column: 1 / 11;
        grid-row: 4 / 7;
      `}
    ${props =>
      props.value.innerWidth > 600 &&
      css`
        grid-column: 1 / 11;
        grid-row: 3 / 7;
        margin: 0 5% 0 5%;
      `}
  `;

  const ComparisonCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-column-gap: 3.5vw;
    overflow: hidden;
    ${props =>
      props.value.innerWidth <= 600 &&
      css`
        grid-column: 1 / 11;
        grid-row: 7 / 11;
      `}
    ${props =>
      props.value.innerWidth > 600 &&
      css`
        grid-column: 1 / 11;
        grid-row: 7 / 11;
        margin: 0 5% 0 5%;
      `}
  `;

  function displayComparison(point) {
    const data = getArray.find(i => {
      // console.log(i);
      return i.id === point.id;
    });

    if (data) {
      const checkEqual = element => element.id === point.id;
      const index = getArray.findIndex(checkEqual);
      getArray.splice(index, 1);
      setArray([...getArray]);
      return;
    }
    if (getArray.length < 3) {
      setArray([...getArray, point]);
    }
  }

  if (getGroup !== props.selectedGroup) {
    axios
      // .get(`http://0.0.0.0:5000/get-group?group=${props.selectedGroup}`)
      .get(`http://18.222.132.180:5000/get-group?group=${props.selectedGroup}`)
      .then(response => {
        console.log(response);
        let objArray = [];
        response.data.forEach(d => {
          console.log(d);

          let unix_timestamp = d.Date;
          // var date = new Date(unix_timestamp).toString().slice(0, 15);
          var date = new Date(unix_timestamp);

          const day = date.getDate();
          const month = date.getMonth();
          const year = date.getFullYear();

          const formattedDate = `${day}/${month}/${year}`;

          date = new Date(unix_timestamp).toString().slice(0, 15);

          // console.log(formattedDate);
          // let amountArray = Number(d.Amount.toFixed(0))
          //   .toString()
          //   .split();
          // console.log(amountArray);

          let obj = {
            amount: Number(d.Amount.toFixed(0)),
            date: formattedDate,
            role_dict: d.role_dict
          };

          if (data) {
            data.forEach(d => {
              console.log(d);
            });
          }

          // otherArray.forEach(a => {
          //   // console.log(a);
          //   let prop = a[0];
          //   let val = a[1];

          //   // console.log(prop);
          //   // console.log(val);

          //   if (val.includes("', '")) {
          //     let split = val.split("', '");
          //     val = split;
          //     // obj[prop] = val;
          //   }

          //   if (prop.includes(" ")) {
          //     let replace = prop.replace(" ", "_");
          //     prop = replace;
          //     if (replace.includes(" ")) {
          //       let again = replace.replace(" ", "_");
          //       prop = again;
          //     }
          //   }

          //   obj[prop] = val;
          // });

          objArray.push(obj);
        });

        let newdata = objArray.map(d => {
          return { x: d.date, y: d.amount };
        });

        // console.log(props.borrowerGroupArray);
        let name;
        props.borrowerGroupArray.forEach(entry => {
          if (entry[1] === props.selectedGroup) {
            return (name = entry[0]);
          }
        });

        array.push({
          id: name,
          color: "hsl(252, 70%, 50%)",
          data: newdata
        });

        setArrayHook([
          {
            id: name,
            color: "hsl(252, 70%, 50%)",
            data: newdata
          }
        ]);

        changeShowComponent(true);

        setData(objArray);

        setGroup(props.selectedGroup);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      {showComponent ? (
        <React.Fragment>
          <GraphContainer value={value}>
            <Graph array={arrayHook} selectPoint={displayComparison} />
          </GraphContainer>
          <ComparisonCardContainer value={value}>
            {getArray.map(el => {
              const index = getArray.indexOf(el);
              let styling;
              switch (index) {
                case 0:
                  if (value.innerWidth <= 600) {
                    styling = { gridColumn: "1 / 5", gridRow: "1 / 13" };
                  } else {
                    styling = { gridColumn: "1 / 5", gridRow: "1 / 13" };
                  }
                  break;
                case 1:
                  if (value.innerWidth <= 600) {
                    styling = { gridColumn: "5 / 9", gridRow: "1 / 13" };
                  } else {
                    styling = { gridColumn: "5 / 9", gridRow: "1 / 13" };
                  }
                  break;
                case 2:
                  if (value.innerWidth <= 600) {
                    styling = { gridColumn: "9 / 13", gridRow: "1 / 13" };
                  } else {
                    styling = { gridColumn: "9 / 13", gridRow: "1 / 13" };
                  }
                  break;
                default:
                  break;
              }
              return (
                <ComparisonCard
                  point={el}
                  displayComparison={displayComparison}
                  style={styling}
                  data={data}
                />
              );
            })}
          </ComparisonCardContainer>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default ProjectPage;
