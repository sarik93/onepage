import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import ButtonElement from "../ButtonElement";
import { server } from "../../../../mock/server";

const changeLabel = (newValue: string) => {
  const labelField = screen.getByTestId("field-label");
  fireEvent.input(within(labelField).getByTestId("input"), {
    target: { value: newValue },
  });
};

const changeAction = (newValue: string) => {
  const actionField = screen.getByTestId("field-action");
  fireEvent.input(within(actionField).getByTestId("input"), {
    target: { value: newValue },
  });
};

describe("Button Element", () => {
  it("should render base button with toggle settings", async () => {
    render(<ButtonElement id={1} />);
    expect(screen.getByTestId("baseButton")).toBeInTheDocument();
    expect(
      screen.queryByTestId("buttonElementSettings"),
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("baseButton"));
    await waitFor(() => {});
    expect(screen.queryByTestId("buttonElementSettings")).toBeInTheDocument();
  });

  it("should change button immediately", async () => {
    render(<ButtonElement id={1} />);
    expect(screen.getByTestId("baseButton")).toHaveTextContent("Button");
    fireEvent.click(screen.getByTestId("baseButton"));
    await waitFor(() => {});
    expect(screen.queryByTestId("buttonElementSettings")).toBeInTheDocument();

    const newValue = "New Button";
    changeLabel(newValue);
    await waitFor(() => {});
    expect(screen.getByTestId("baseButton")).toHaveTextContent(newValue);

    expect(
      within(screen.getByTestId("baseButton")).getByRole("link"),
    ).toHaveAttribute("href", "");
    const newActionHref = "https://www.google.com";
    changeAction(newActionHref);
    await waitFor(() => {});
    expect(
      within(screen.getByTestId("baseButton")).getByRole("link"),
    ).toHaveAttribute("href", newActionHref);

    const sizeField = screen.getByTestId("field-size");
    const sizeOptions = within(sizeField).getAllByTestId("radio-label");
    expect(sizeOptions[1]).toHaveClass("checked");
    expect(screen.getByTestId("baseButtonLink")).toHaveStyle({
      "--button-font-size": "15px",
    });
    fireEvent.click(sizeOptions[0]);
    await waitFor(() => {});
    expect(sizeOptions[1]).not.toHaveClass("checked");
    expect(sizeOptions[0]).toHaveClass("checked");
    expect(screen.getByTestId("baseButtonLink")).toHaveStyle({
      "--button-font-size": "17px",
    });

    const horizontalAlignmentField = screen.getByTestId(
      "field-horizontal-alignments",
    );
    const horizontalAlignmentOptions = within(
      horizontalAlignmentField,
    ).getAllByTestId("radio-label");
    expect(horizontalAlignmentOptions[1]).toHaveClass("checked");
    expect(screen.getByTestId("baseButtonWrapper")).toHaveAttribute(
      "data-horizontal",
      "center",
    );
    fireEvent.click(horizontalAlignmentOptions[0]);
    await waitFor(() => {});
    expect(horizontalAlignmentOptions[1]).not.toHaveClass("checked");
    expect(horizontalAlignmentOptions[0]).toHaveClass("checked");
    expect(screen.getByTestId("baseButtonWrapper")).toHaveAttribute(
      "data-horizontal",
      "left",
    );
  });

  it("should fire api request when changed property (for input blur)", async () => {
    render(<ButtonElement id={1} />);
    fireEvent.click(screen.getByTestId("baseButton"));

    changeLabel("Button");
    fireEvent.blur(
      within(screen.getByTestId("field-label")).getByTestId("input"),
    );
    await waitFor(() => {});
    let handler = server
      .listHandlers()
      .find((handler) => handler.info.header.includes("element/:id"));
    expect(handler?.isUsed).toBeTruthy();
    server.restoreHandlers();

    const sizeField = screen.getByTestId("field-size");
    const sizeOptions = within(sizeField).getAllByTestId("radio-label");
    fireEvent.click(sizeOptions[0]);
    await waitFor(() => {});
    handler = server
      .listHandlers()
      .find((handler) => handler.info.header.includes("element/:id"));
    expect(handler?.isUsed).toBeTruthy();
    server.restoreHandlers();

    const horizontalAlignmentField = screen.getByTestId(
      "field-horizontal-alignments",
    );
    const horizontalAlignmentOptions = within(
      horizontalAlignmentField,
    ).getAllByTestId("radio-label");
    fireEvent.click(horizontalAlignmentOptions[0]);
    await waitFor(() => {});
    handler = server
      .listHandlers()
      .find((handler) => handler.info.header.includes("element/:id"));
    expect(handler?.isUsed).toBeTruthy();
    server.restoreHandlers();
  });
});
