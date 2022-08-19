import theme from "../styles/theme";
import { Circles } from "react-loader-spinner";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vw;
`;

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <Circles
          color={`${theme.color.green}`}
          height={50}
          width={50}
          style={{ margin: "0 auto" }}
        />
      </LoadingContainer>
    </>
  );
};
export default Loading;
