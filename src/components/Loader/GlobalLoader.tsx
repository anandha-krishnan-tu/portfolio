import styled from "styled-components";
import { useProgress } from "@react-three/drei";

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: #010110;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  color: white;
  flex-direction: column;
`;

function GlobalLoader() {
  const { progress } = useProgress();

  return (
    <LoaderWrapper>
      <h1>Loading</h1>
      <p>{Math.round(progress)}%</p>
    </LoaderWrapper>
  );
}

export default GlobalLoader;