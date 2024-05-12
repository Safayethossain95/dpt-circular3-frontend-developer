import React, { useEffect, useState } from "react";
import "./ContentsBody.scss";
import { Container, Form, NavDropdown, Table } from "react-bootstrap";
const ContentsBody = () => {
  const [fromdestination, setfromdestination] = useState("");
  const [todestination, settodestination] = useState("");
  const [date, setdate] = useState("");
  const [datavisible,setdatavisible] = useState(false)
  const [message,setmessage] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchFlightOffers = async () => {
        try {
          const response = await fetch("/data/LHR_CDG_ADT1_TYPE_1.txt"); // Update the path to your text file
          const text = await response.text();
          const temp = JSON.parse(text);

          console.log(temp.flightOffer);
          setFlightOffers(temp.flightOffer);
          // Set loading state to false
          setmessage(temp)
          setdatavisible(true)
        } catch (error) {
          console.error("Error reading the file:", error);
          // Set loading state to false
        }
      };
  
      fetchFlightOffers();
    // Handle form submission logic here
  };

  const [fileContent, setFlightOffers] = useState([]);

  useEffect(() => {
    
  }, []);
  return (
    <>
      <div className="contentsbody">
        <div className="heading">
          <Container>
            <h2>Master price</h2>
          </Container>
        </div>

        <div className="searcharea">
          <Container className="my-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 d-flex gap-2">
                <input
                  type="text"
                  placeholder="FROM"
                  value={fromdestination}
                  onChange={(event) =>
                    setfromdestination(event.target.value.toUpperCase())
                  }
                />
                <input
                  type="text"
                  placeholder="TO"
                  value={todestination}
                  onChange={(event) =>
                    settodestination(event.target.value.toUpperCase())
                  }
                />
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setdate(event.target.value)}
                />
                 <NavDropdown
              id="nav-dropdown-dark-example"
              title="Day-"
              menuVariant="dark"
              style={{border:"1px solid #000",padding:"0 20px"}}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
                 <NavDropdown
              id="nav-dropdown-dark-example"
              title="Day+"
              menuVariant="dark"
              style={{border:"1px solid #000",padding:"0 20px"}}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
                 <NavDropdown
              id="nav-dropdown-dark-example"
              title="Any Time"
              menuVariant="dark"
              style={{border:"1px solid #000",padding:"0 60px 0 20px"}}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            +
                 <NavDropdown
              id="nav-dropdown-dark-example"
              title="ADT"
              menuVariant="dark"
              style={{border:"1px solid #000",padding:"0 60px 0 20px"}}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
                 <NavDropdown
              id="nav-dropdown-dark-example"
              title="Any Time"
              menuVariant="dark"
              style={{border:"1px solid #000",padding:"0 60px 0 20px"}}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            +
              </Form.Group>
              <div className="text-end">

              <button style={{width:"80px"}} className="ms-auto" type="submit">Submit</button>
              </div>
            </Form>
          </Container>
        </div>
        {
            datavisible &&
        <div className="tablearea">
          <Container>
            <div className="text-start">

            <h4 className="my-3">{message.message}</h4>
            </div>
            <Table style={{border:"1px solid #ddd"}}>
              <thead>
                <tr>
                  <th>FLIGHT</th>
                  <th>AIRCRAFT</th>
                  <th>CLASS</th>
                  <th>FAIR</th>
                  <th>ROUTE</th>
                  <th>DEPARTURE</th>
                  <th>ARRIVAL</th>
                  <th>DURATION</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                {fileContent.map((item, key) => {
                    return (
                        <>
                      {item.itineraries.map((item2, key2) => {
                          return (
                              <>
                            {item2.segments.map((item3, key3) => {
                                return (
                                    <>
                                  <tr>
                                
                                      <td>
                                        {item3.carrierCode}

                                        {item3.aircraft}
                                      </td>
                                      <td>{item3.flightNumber}</td>
                                      <td>{item.class[0][0]}</td>
                                      <td>{item.fareBasis[0][0]}</td>
                                      <td>
                                        {item3.departure.iataCode}-
                                        {item3.arrival.iataCode}
                                      </td>
                                      <td>{item3.departure.at}</td>
                                      <td>{item3.arrival.at}</td>
                                      <td>{item2.duration}</td>
                                      {
                                        key3===0 ?
                                      <td className="text-center ">
                                        {item.price}
                                        
                                      </td>
                                      :
                                      <td className="text-center"><button>Select</button></td>
                                      }
                                  
                              </tr>
                                </>
                              );
                            })}
                          </>
                        );
                    })}
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </div>
        }
      </div>
    </>
  );
};

export default ContentsBody;
