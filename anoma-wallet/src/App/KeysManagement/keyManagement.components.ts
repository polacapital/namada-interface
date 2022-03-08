import styled from "styled-components/macro";

export const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  // TODO: maybe this is too hacky? maybe there could be just another div
  // behind the main one with transform: translate(-4px, 4px);
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.background2};
  padding: ${(props) =>
    props.theme.themeConfigurations.isLightMode ? "0 32px" : "4px 36px 0 32px"};
  height: 620px;
  width: 480px;
  border-radius: 24px;
  ${(props) =>
    props.theme.themeConfigurations.isLightMode
      ? `border: solid 4px ${props.theme.colors.border}`
      : ""};
  border-left: solid 8px ${(props) => props.theme.colors.border};
  border-bottom: solid 8px ${(props) => props.theme.colors.border};
  transition: background-color 0.3s linear;
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: start;
  width: 100%;
  align-items: center;
  margin: 36px 0 30px 0;
`;

export const TopSectionHeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const TopSectionButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 48px;
  align-items: center;
`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 32px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Headline = styled.h1`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 30px;
  font-weight: bold;
`;

export const BodyText = styled.span`
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 8px 0;
`;

export const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 84px;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 4px;
  outline-color: transparent;
  outline-style: none;
  color: ${(props) => props.theme.colors.textPrimary};
  resize: none;
`;
