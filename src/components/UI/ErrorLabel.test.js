const { render, screen } = require("@testing-library/react")
const { default: ErrorLabel } = require("./ErrorLabel")

test("ErrorLabel Component test", () =>{
render(<ErrorLabel className="dummy">Error message</ErrorLabel>);
const lableElement = screen.getByText('Error message');
expect(lableElement).toBeInTheDocument();
})