import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
// import EditTicketModal from "../components/editTicketModal.tsx";
import "../styles/planRadar.scss";

interface Props {
  rows: Array<{}>;
  handleEditTicket: (data: {}) => void;
}
const CardsPlanRadar: React.FC<Props> = (props) => {
  let allRows = props.rows;
  const cardHeight = 225;
  const paperHeight = 800;
  const [state, setState] = useState({
    paperHeight: cardHeight * allRows.length,
    scroll: {
      top: 0,
      index: 0,
      end: Math.ceil((paperHeight * 2) / cardHeight),
    },
  });
  const onScroll = ({ target }) => {
    let scrollTop = target.scrollTop;
    let index = Math.floor(scrollTop / cardHeight);
    setState({
      ...state,
      scroll: {
        index: Math.floor(scrollTop / cardHeight),
        end: index + Math.ceil((paperHeight * 2) / cardHeight),
        top: (scrollTop / cardHeight) * cardHeight,
      },
    });
  };
  const [modalShow, setModalShow] = useState(false);
  const handleSubmit = (data: {}) => {
    props.handleEditTicket(data);
    setModalShow(false);
  };
  const generateRows: any = () => {
    let index: number = state.scroll.index;
    let end = state.scroll.end;
    let items: Array<{}> = [];
    do {
      if (index >= allRows.length) {
        index = allRows.length;
        break;
      }

      let tableRows =
        // <div
        //   key={index}
        //   style={{
        //     //    position: "absolute",
        //     top: index * cardHeight,
        //     left: 0,
        //     height: cardHeight,
        //     //   lineHeight: `${rowHeight}px`,
        //   }}
        // >
        //   {
        allRows.map((row: any, i: number) => (
          <div
            key={i}
            style={{
              margin: "15px",
              width: "80%",

              //  position: "absolute",
              //  top: index * cardHeight,
              //  left: 0,
              //  height: cardHeight,
              //   lineHeight: `${rowHeight}px`,
            }}
          >
            <Card
              key={i}
              style={{
                // position: "absolute",
                // top: index * cardHeight,
                // left: 0,
                height: cardHeight,
              }}
            >
              <Card.Body>
                <Card.Header>ID: {row.id}</Card.Header>
                <Card.Title className="mb-2 text-muted">
                  <strong>Subject:</strong> {row.subject}
                </Card.Title>
                <Card.Title className="mb-2 text-muted">
                  Priority: {row.priority}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Status: {row.status}
                </Card.Subtitle>
                <Card.Text
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Description: {row.description}
                  <Button
                    variant="primary"
                    onClick={() => handleEdit(row)}
                    className="general-btn"
                  >
                    Edit
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ));
      // }

      items.push(tableRows);
      index++;
    } while (index < end);

    return items;
  };

  // const tableAttrs = {
  //   className: "box-content",
  //   style: { height: paperHeight },
  //   onScroll: onScroll,
  // };
  const [ticketData, setTicketData] = useState({});
  const handleEdit = (row: object) => {
    setTicketData(row);
    setModalShow(true);
  };

  return (
    <div className="wrapper">
      <div
        style={{ height: paperHeight }}
        onScroll={onScroll}
        className="box-content"
        //{...tableAttrs}
      >
        {/* <div
        // style={{
        //   position: "relative",
        //   display: "inline-block",
        //   height: paperHeight,
        //   maxHeight: paperHeight,
        //   width: "1100px",
        // }}
        > */}
        {generateRows()}
        {/* </div> */}
      </div>
      {/* <EditTicketModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleSubmit={handleSubmit}
        ticketData={ticketData}
      /> */}
    </div>
  );
};
export default CardsPlanRadar;
