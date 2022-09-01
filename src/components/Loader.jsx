import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 5vw;
`;

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <div class="loadingio-spinner-spinner-mc5l52eopz">
          <div class="ldio-7y41m7939pa">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </LoadingContainer>
    </>
  );
};
export default Loading;
