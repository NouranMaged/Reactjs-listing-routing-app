import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./planRadar.scss";
import { Button } from "react-bootstrap";

function TablePlanRadar(rows) {
  let allRows = rows.rows;
  const rowHeight = 50;
  const tableHeight = 1000;
  const [state, setState] = useState({
    columns: Object.keys(allRows[0]),
    tableHeight: rowHeight * allRows.length,
    scroll: {
      top: 0,
      index: 0,
      end: Math.ceil((tableHeight * 2) / rowHeight),
    },
  });

  const onScroll = ({ target }) => {
    let scrollTop = target.scrollTop;
    let index = Math.floor(scrollTop / rowHeight);
    setState({
      ...state,
      scroll: {
        index: Math.floor(scrollTop / rowHeight),
        end: index + Math.ceil((tableHeight * 2) / rowHeight),
        top: (scrollTop / rowHeight) * rowHeight,
      },
    });
  };
  console.log(state);

  const generateRows = () => {
    let columns = state.columns;
    let index = state.scroll.index;
    let end = state.scroll.end;
    let items: any = [];

    do {
      if (index >= allRows.length) {
        index = allRows.length;
        break;
      }

      let tableRows = (
        <tr
          style={{
            position: "absolute",
            top: index * rowHeight,
            left: 0,
            height: rowHeight,
            //   lineHeight: `${rowHeight}px`,
          }}
          className={`tr ${index % 2 === 0 ? "tr-odd" : "tr-even"}`}
          key={index}
        >
          {columns.map((column, i) => (
            // console.log(allRows[index]),
            <td key={i}>{allRows[index][column]}</td>
          ))}
          <td>
            <Button
              onClick={() => {
                console.log(allRows[index]);
              }}
            >
              Edit
            </Button>
          </td>
        </tr>
      );
      items.push(tableRows);

      index++;
    } while (index < end);

    return items;
  };

  const tableAttrs = {
    className: "table-content",
    style: { height: tableHeight },
    onScroll: onScroll,
  };

  return (
    <div className={"wrapper"}>
      <table>
        <thead>
          <tr className={"tr"}>
            {state.columns.map((name, i) => (
              <th key={i}>{name}</th>
            ))}
          </tr>
        </thead>
      </table>
      <Table {...tableAttrs}>
        <tbody
          style={{
            position: "relative",
            display: "inline-block",
            height: tableHeight,
            maxHeight: tableHeight,
            width: "100%",
          }}
        >
          {generateRows()}
        </tbody>
      </Table>
    </div>
  );
}
export default TablePlanRadar;
