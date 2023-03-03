import styled from "styled-components";

export const FullSize = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ShadowedContainer = styled.div`
  width: ${(props) => props.width || ""};
  padding: ${(props) => props.padding || "16px"};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.borderRadius || ""};
`;

export const ScrollContainer = styled.div`
  max-height: ${(props) => props.maxHeight || ""};
  padding: ${(props) => props.padding || ""};
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: 0.2s;
`;

export const Container = styled.div`
  padding: ${(props) => props.padding || ""};
  transition: 0.2s;
`;

export const IconContainer = styled.div`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || ""};
  background-color: ${(props) => props.backgroundColor || ""};
  border-radius: ${(props) => props.borderRadius || ""};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "flex-center"};
  align-items: ${(props) => props.alignItems || "flex-center"};
`;

export const FRow = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 100%;
  display: flex;
  flex-grow: ${(props) => props.flexGrow || ""};
  justify-content: ${(props) => props.justifyContent || "flex-center"};
  align-items: ${(props) => props.alignItems || "flex-center"};
  gap: ${(props) => props.gap || ""};
  flex-direction: row;
`;

export const FColumnGap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "flex-center"};
  align-items: ${(props) => props.alignItems || "flex-center"};
  gap: ${(props) => props.gap || "24px"};
`;

export const ContainerQueryHide = styled.div`
  @media screen and (max-width: ${(props) => props.maxWidth || "500px"}) {
    display: none;
  }
`;
