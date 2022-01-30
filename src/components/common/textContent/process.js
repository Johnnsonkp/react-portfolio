import { Card } from "antd";
import { useWindowSize } from "../../utils/utilFunctions";

export const Processes = (props) => {
  const size = useWindowSize();
  return (
    <div
      id="processes"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: size.width < 630 ? "column" : null,
        width: "100%",
        boxShadow: "0 0 20px #78787820",
        fontWeight: "300",
        margin: "auto",
      }}
    >
      <Card
        style={{ marginLeft: "10px", marginRight: "10px" }}
        title={"01. Research"}
      >
        <p
          style={{
            fontWeight: "300",
            opacity: "0.7",
            fontSize: size.width > 1350 ? null : "0.8em",
          }}
        >
          Understand the client’s subject matter completely and build on the
          knowledge related to it, becoming intimately familiar with the subject
          matter. Determine methods to address the specific customer’s needs and
          requirements.
        </p>
      </Card>
      <Card
        style={{ marginLeft: "10px", marginRight: "10px" }}
        title={"02. Design"}
      >
        <p
          style={{
            fontWeight: "300",
            opacity: "0.7",
            fontSize: "1em",
            fontSize: size.width > 1350 ? null : "0.8em",
          }}
        >
          Misleadingly thought of as the superficial appearance of a product,
          design actually encompasses a lot more. It is a cross functional
          process that includes market research, technical research, design of a
          concept, and prototype mockup.
        </p>
      </Card>
      <Card
        style={{ marginLeft: "10px", marginRight: "10px" }}
        title={"03. Develop"}
      >
        <p
          style={{
            fontWeight: "300",
            opacity: "0.7",
            fontSize: "1em",
            fontSize: size.width > 1350 ? null : "0.8em",
          }}
        >
          Findings from the research and design phases are utilized for the
          production of specific products including materials, systems, and
          methods. Engineer utilizing the research and designs to produce
          commercial products for the customer.
        </p>
      </Card>
    </div>
  );
};
