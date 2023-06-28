import { render, screen, within, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from "../../App";

import {
  MENU_LIST_ID,
  MENU_BUTTON_ITEM_HOME_ID,
  MENU_BUTTON_ITEM_SOBRE_ID,
  MENU_BUTTON_ITEM_PRODUTOS_ID,
  MENU_BUTTON_ITEM_CONTATO_ID,
  FORMS_COLABORADOR_ID,
  CAMPO_TEXTO_NOME_ID,
  CAMPO_TEXTO_CARGO_ID,
  CAMPO_TEXTO_IMAGEM_ID,
  CAMPO_TEXTO_LINKEDIN_ID,
  LISTA_SUSPENSA_ID,
  LISTA_SUSPENSA_PROGRAMACAO_ID,
  LISTA_SUSPENSA_FRONT_END_ID,
  LISTA_SUSPENSA_DATA_SCIENSE_ID,
  LISTA_SUSPENSA_DEVOPS_ID,
  LISTA_SUSPENSA_UX_DESIGN_ID,
  LISTA_SUSPENSA_MOBILE_ID,
  LISTA_SUSPENSA_INOVACAO_ID,
  LISTA_SUSPENSA_QUALITY_ASSURANCE_ID,
  LISTA_SUSPENSA_TEST_AUTOMATION_ID,
  LISTA_SUSPENSA_IT_SUPPORT_ID,
  BUTTON_CREATE_CARD_ID,
  TIME_ADD_ID,
  TIME_ADD_PROGRAMACAO_ID,
  TIME_ADD_FRONT_END_ID,
  TIME_ADD_DATA_SCIENSE_ID,
  TIME_ADD_DEVOPS_ID,
  TIME_ADD_UX_DESIGN_ID,
  TIME_ADD_MOBILE_ID,
  TIME_ADD_INOVACAO_ID,
  TIME_ADD_QUALITY_ASSURANCE_ID,
  TIME_ADD_TEST_AUTOMATION_ID,
  TIME_ADD_IT_SUPPORT_ID,
  COLABORADOR_NOME_ALAN_SANTOS_ID,
  COLABORADOR_CARGO_QA_ID,
  COLABORADOR_IMAGEM_ALANINFO23_ID,
  COLABORADOR_LINKEDIN_ALANINFO23_ID,
  FOOTER_ID,
  FACEBOOK_LINK_ID,
  INSTAGRAM_LINK_ID,
  LINKEDIN_LINK_ID,
  WHATSAPP_LINK_ID,
} from "../helpers/testHelpers";

import {
  BUTTON_HOME,
  BUTTON_SOBRE,
  BUTTON_PRODUTOS,
  BUTTON_CONTATO,
  CAMPO_NOME,
  PLACEHOLDER_NOME,
  CAMPO_CARGO,
  PLACEHOLDER_CARGO,
  CAMPO_IMAGEM,
  PLACEHOLDER_IMAGEM,
  CAMPO_LINKEDIN,
  PLACEHOLDER_LINKEDIN,
  SELECT_TIME,
  BUTTON_CRIAR_CARD,
} from "../strings/testStrings";

describe("User should be able", () => {
  it("The menu should have correct content", () => {
    render(<App />);
    const menuList = within(screen.getByTestId(MENU_LIST_ID));

    const buttonHome = menuList.getByTestId(MENU_BUTTON_ITEM_HOME_ID);
    expect(buttonHome).toBeInTheDocument();
    expect(buttonHome).toHaveTextContent(BUTTON_HOME);

    const buttonSobre = menuList.getByTestId(MENU_BUTTON_ITEM_SOBRE_ID);
    expect(buttonSobre).toBeInTheDocument();
    expect(buttonSobre).toHaveTextContent(BUTTON_SOBRE);

    const buttonProdutos = menuList.getByTestId(MENU_BUTTON_ITEM_PRODUTOS_ID);
    expect(buttonProdutos).toBeInTheDocument();
    expect(buttonProdutos).toHaveTextContent(BUTTON_PRODUTOS);

    const buttonContato = menuList.getByTestId(MENU_BUTTON_ITEM_CONTATO_ID);
    expect(buttonContato).toBeInTheDocument();
    expect(buttonContato).toHaveTextContent(BUTTON_CONTATO);
  });

  it("User form should have correct content", () => {
    render(<App />);
    const formUser = within(screen.getByTestId(FORMS_COLABORADOR_ID));

    const inputName = formUser.getByTestId(CAMPO_TEXTO_NOME_ID);
    expect(inputName).toBeInTheDocument();

    const labelName = formUser.getByText(CAMPO_NOME);
    expect(labelName).toBeInTheDocument();

    const inputCargo = formUser.getByTestId(CAMPO_TEXTO_CARGO_ID);
    expect(inputCargo).toBeInTheDocument();

    const labelCargo = formUser.getByText(CAMPO_CARGO);
    expect(labelCargo).toBeInTheDocument();

    const inputImage = formUser.getByTestId(CAMPO_TEXTO_IMAGEM_ID);
    expect(inputImage).toBeInTheDocument();

    const labelImage = formUser.getByText(CAMPO_IMAGEM);
    expect(labelImage).toBeInTheDocument();

    const inputLinkedin = formUser.getByTestId(CAMPO_TEXTO_LINKEDIN_ID);
    expect(inputLinkedin).toBeInTheDocument();

    const labelLinkedin = formUser.getByText(CAMPO_LINKEDIN);
    expect(labelLinkedin).toBeInTheDocument();

    const selectTime = formUser.getByTestId(LISTA_SUSPENSA_ID);
    expect(selectTime).toBeInTheDocument();

    const options = [
      "Programação",
      "Front-End",
      "Data Sciense",
      "Devops",
      "UX e Design",
      "Mobile",
      "Inovação e Gestão",
      "Quality Assurance",
      "Test Automation",
      "IT Support",
    ];

    // Verifica se todas as opções estão presentes na lista
    const optionElements = screen.getAllByTestId(/^LISTA_SUSPENSA_/);

    optionElements.forEach((optionElement) => {
      const optionText = optionElement.textContent;
      expect(options).toContain(optionText);
    });

    // Verifica se há somente as opções da lista
    expect(optionElements.length).toBe(options.length);

    const buttonCreateCard = formUser.getByTestId(BUTTON_CREATE_CARD_ID);
    expect(buttonCreateCard).toBeInTheDocument();
  });

  it("The footer must have the correct content.", () => {
    render(<App />);
    const footerLinks = within(screen.getByTestId(FOOTER_ID));

    const facebookLink = footerLinks.getByTestId(FACEBOOK_LINK_ID);
    expect(facebookLink).toBeInTheDocument();
    // Obtém o valor do atributo "href" do link.
    const hrefValueFacebook = facebookLink.getAttribute("href");
    // Verifica se o valor do atributo "href" é igual à URL correta.
    expect(hrefValueFacebook).toEqual("https://www.facebook.com");

    const instagramLink = footerLinks.getByTestId(INSTAGRAM_LINK_ID);
    expect(instagramLink).toBeInTheDocument();
    const hrefValueInstagram = instagramLink.getAttribute("href");
    expect(hrefValueInstagram).toEqual("https://www.instagram.com");

    const linkedinLink = footerLinks.getByTestId(LINKEDIN_LINK_ID);
    expect(linkedinLink).toBeInTheDocument();
    const hrefValueLinkedin = linkedinLink.getAttribute("href");
    expect(hrefValueLinkedin).toEqual("https://www.linkedin.com");

    const whatsappLink = footerLinks.getByTestId(WHATSAPP_LINK_ID);
    expect(whatsappLink).toBeInTheDocument();
  });

  it.only("possible to create a card", async () => {
    render(<App />);
    const formUser = within(screen.getByTestId(FORMS_COLABORADOR_ID));

    const inputName = formUser.getByTestId(CAMPO_TEXTO_NOME_ID);
    const inputCargo = formUser.getByTestId(CAMPO_TEXTO_CARGO_ID);
    const inputImage = formUser.getByTestId(CAMPO_TEXTO_IMAGEM_ID);
    const inputLinkedin = formUser.getByTestId(CAMPO_TEXTO_LINKEDIN_ID);
    const inputSelect = formUser.getByTestId(LISTA_SUSPENSA_ID);
    const buttonCreateCard = formUser.getByTestId(BUTTON_CREATE_CARD_ID);

    userEvent.type(inputName, "Alan Santos");
    userEvent.type(inputCargo, "QA");
    userEvent.type(inputImage, "alaninfo23");
    userEvent.type(inputLinkedin, "alaninfo23");
    userEvent.selectOptions(inputSelect, "Quality Assurance");
    userEvent.click(buttonCreateCard);

    await waitFor(() => {
      expect(screen.getByTestId(TIME_ADD_ID)).toBeInTheDocument();
    }); 

    const timeAdd = within(screen.getByTestId(TIME_ADD_ID));
    const timeQA = timeAdd.getByTestId(TIME_ADD_QUALITY_ASSURANCE_ID);
    expect(timeQA).toBeInTheDocument();

      const colaboradorNome = timeAdd.getByTestId(
        COLABORADOR_NOME_ALAN_SANTOS_ID
      );
      expect(colaboradorNome).toBeInTheDocument();



      const colaboradorAdd = within(
        screen.getByTestId(COLABORADOR_NOME_ALAN_SANTOS_ID)
      );
      const colaboradorImg = colaboradorAdd.getByTestId(
        COLABORADOR_IMAGEM_ALANINFO23_ID
      );
      expect(colaboradorImg).toBeInTheDocument();



      const colaboradorCargo = colaboradorAdd.getByTestId(
        COLABORADOR_CARGO_QA_ID
      );
      expect(colaboradorCargo).toBeInTheDocument();
  

      const colaboradorLinkedin = colaboradorAdd.getByTestId(
        COLABORADOR_LINKEDIN_ALANINFO23_ID
      );
      expect(colaboradorLinkedin).toBeInTheDocument();

  });

  it("possible to create a card without image and linkedin.", async () => {
    render(<App />);
    const formUser = within(screen.getByTestId(FORMS_COLABORADOR_ID));

    const inputName = formUser.getByTestId(CAMPO_TEXTO_NOME_ID);
    const inputCargo = formUser.getByTestId(CAMPO_TEXTO_CARGO_ID);
    const inputSelect = formUser.getByTestId(LISTA_SUSPENSA_ID);
    const buttonCreateCard = formUser.getByTestId(BUTTON_CREATE_CARD_ID);

    userEvent.type(inputName, "Alan Santos");
    userEvent.type(inputCargo, "QA");
    userEvent.selectOptions(inputSelect, "Quality Assurance");
    userEvent.click(buttonCreateCard);

    await waitFor(() => {
      const timeAdd = within(screen.getByTestId(TIME_ADD_ID));
      const timeQA = timeAdd.getByTestId(TIME_ADD_QUALITY_ASSURANCE_ID);
      expect(timeQA).toBeInTheDocument();
    });

    await waitFor(() => {
      const timeAdd = within(screen.getByTestId(TIME_ADD_ID));
      const colaboradorNome = timeAdd.getByTestId(
        COLABORADOR_NOME_ALAN_SANTOS_ID
      );
      expect(colaboradorNome).toBeInTheDocument();
    });

    await waitFor(() => {
      const colaboradorAdd = within(
        screen.getByTestId(COLABORADOR_NOME_ALAN_SANTOS_ID)
      );
      const colaboradorCargo = colaboradorAdd.getByTestId(
        COLABORADOR_CARGO_QA_ID
      );
      expect(colaboradorCargo).toBeInTheDocument();
    });
  });

  it("possible to create a card without a linkedin URL.", async () => {
    render(<App />);
    const formUser = within(screen.getByTestId(FORMS_COLABORADOR_ID));

    const inputName = formUser.getByTestId(CAMPO_TEXTO_NOME_ID);
    const inputCargo = formUser.getByTestId(CAMPO_TEXTO_CARGO_ID);
    const inputImage = formUser.getByTestId(CAMPO_TEXTO_IMAGEM_ID);
    const inputSelect = formUser.getByTestId(LISTA_SUSPENSA_ID);
    const buttonCreateCard = formUser.getByTestId(BUTTON_CREATE_CARD_ID);

    userEvent.type(inputName, "Alan Santos");
    userEvent.type(inputCargo, "QA");
    userEvent.type(inputImage, "alaninfo23");
    userEvent.selectOptions(inputSelect, "Quality Assurance");
    userEvent.click(buttonCreateCard);

    await waitFor(() => {
      const timeAdd = within(screen.getByTestId(TIME_ADD_ID));
      const timeQA = timeAdd.getByTestId(TIME_ADD_QUALITY_ASSURANCE_ID);
      expect(timeQA).toBeInTheDocument();
    });

    await waitFor(() => {
      const timeAdd = within(screen.getByTestId(TIME_ADD_ID));
      const colaboradorNome = timeAdd.getByTestId(
        COLABORADOR_NOME_ALAN_SANTOS_ID
      );
      expect(colaboradorNome).toBeInTheDocument();
    });

    await waitFor(() => {
      const colaboradorAdd = within(
        screen.getByTestId(COLABORADOR_NOME_ALAN_SANTOS_ID)
      );
      const colaboradorCargo = colaboradorAdd.getByTestId(
        COLABORADOR_CARGO_QA_ID
      );
      expect(colaboradorCargo).toBeInTheDocument();
    });

    await waitFor(() => {
      const colaboradorAdd = within(
        screen.getByTestId(COLABORADOR_NOME_ALAN_SANTOS_ID)
      );
      expect(
        colaboradorAdd.getByText("https://www.linkedin.com/in/")
      ).toBeInTheDocument();
    });
  });

  it.skip("it should not be possible to create a card without filling in the name", async () => {
    render(<App />);
    const formUser = within(screen.getByTestId(FORMS_COLABORADOR_ID));
    //const inputName = formUser.getByTestId(CAMPO_TEXTO_NOME_ID);
    const inputCargo = formUser.getByTestId(CAMPO_TEXTO_CARGO_ID);
    const inputImage = formUser.getByTestId(CAMPO_TEXTO_IMAGEM_ID);
    const inputLinkedin = formUser.getByTestId(CAMPO_TEXTO_LINKEDIN_ID);
    const inputSelect = formUser.getByTestId(LISTA_SUSPENSA_ID);
    const buttonCreateCard = formUser.getByTestId(BUTTON_CREATE_CARD_ID);

    //userEvent.type(inputName, "Alan Santos");
    userEvent.type(inputCargo, "QA");
    userEvent.type(inputImage, "alaninfo23");
    userEvent.type(inputLinkedin, "alaninfo23");
    userEvent.selectOptions(inputSelect, "Quality Assurance");
    userEvent.click(buttonCreateCard);

    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    const expectedMessage = "Please fill out this field";
    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith(expectedMessage);
  });
});
