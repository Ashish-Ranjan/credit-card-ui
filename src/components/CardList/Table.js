import SectionHeading from "../UI/SectionHeading";
import Wrapper from "../UI/Wrapper";
import CardDetails from "./CardDetails";
import "./Table.scss";
import TableHeader from "./TableHeader";

const Table = (props) => {
  const classes = `table-container ${props.className}`;
  return (
    <Wrapper>
      <SectionHeading className="section">Existing Cards</SectionHeading>
      <div className={classes}>
        <TableHeader
          nameHeader="Name"
          cardnumberHeader="Card Number"
          balanceHeader="Balance"
          limitHeader="Limit"
        />
        {props.cardList.map((cardDetails) => (
          <CardDetails
            key={cardDetails._id}
            name={cardDetails.name}
            cardnumber={cardDetails.cardnumber}
            balance={cardDetails.balance}
            limit={cardDetails.limit}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Table;
