import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from "../../App";

import {
  INPUT_NAME_ID,
  INPUT_CARGO_ID,
  INPUT_IMAGE_ID,
  INPUT_LINKEDIN_ID,
  INPUT_SELECT_ID,
  INPUT_BUTTON_CREATE_CARD_ID,
  FACEBOOK_LINK_ID,
  INSTAGRAM_LINK_ID,
  LINKEDIN_LINK_ID,
  WHATSAPP_LINK_ID,
} from "../helpers/testHelpers";

import {
  NOME,
  CARGO,
  IMAGEM,
  LINKEDIN,
  TIME,
  BOTAO,
} from "../strings/testStrings";

describe("Should be able", () => {
  it("render the Name", () => {
    render(<App />);
    const inputName = screen.getByTestId(INPUT_NAME_ID);
    expect(inputName).toBeInTheDocument();
  });

  it("render the Cargo", () => {
    render(<App />);
    const inputCargo = screen.getByTestId(INPUT_CARGO_ID);
    expect(inputCargo).toBeInTheDocument();
  });

  it("render the Image", () => {
    render(<App />);
    const inputImage = screen.getByTestId(INPUT_IMAGE_ID);
    expect(inputImage).toBeInTheDocument();
  });

  it("render the Linkedin", () => {
    render(<App />);
    const inputLinkedin = screen.getByTestId(INPUT_LINKEDIN_ID);
    expect(inputLinkedin).toBeInTheDocument();
  })

  it("render the Time", () => {
    render(<App />);
    const inputSelect = screen.getByTestId(INPUT_SELECT_ID);
    expect(inputSelect).toBeInTheDocument();
  })

  it("render the Button", () => {
    render(<App />);
    const buttonCreateCard = screen.getByTestId(INPUT_BUTTON_CREATE_CARD_ID);
    expect(buttonCreateCard).toBeInTheDocument();
  })


});
