import styled from "styled-components";

const Base = styled.div`
  height: 10px;
  width: 250px;
  background: #fff;
  margin-left: 100px;
`;

const Stem = styled.div`
  height: 250px;
  width: 10px;
  background: #fff;
  margin-left: 150px;
`;

const StemSmall = styled.div`
  height: 40px;
  width: 10px;
  background: #fff;
  margin-left: 150px;
  position: absolute;
  right: 50px;
  top: 0;
`;

const Horizontal = styled.div`
  height: 10px;
  width: 140px;
  background: #fff;
  position: absolute;
  right: 60px;
  top: 0;
`;

const Head = styled.div`
  height: 30px;
  width: 30px;
  border: 8px solid #fff;
  border-radius: 50%;
  position: absolute;
  right: 32px;
  top: 37px;
`;

const Body = styled.div`
  height: 80px;
  width: 10px;
  background: #fff;
  margin-left: 150px;
  position: absolute;
  right: 50px;
  top: 75px;
`;
const RightArm = styled.div`
  height: 10px;
  width: 60px;
  background: #fff;
  margin-left: 150px;
  position: absolute;
  rotate: -30deg;
  right: 0px;
  top: 90px;
`;

const LeftArm = styled.div`
  height: 10px;
  width: 60px;
  background: #fff;
  margin-left: 150px;
  position: absolute;
  rotate: 30deg;
  right: 50px;
  top: 90px;
`;

const RightLeg = styled.div`
  height: 10px;
  width: 60px;
  background: #fff;
  margin-left: 150px;
  position: absolute;
  rotate: 50deg;
  right: 5px;
  top: 165px;
`;

const LeftLeg = styled.div`
  height: 10px;
  width: 60px;
  background: #fff;
  margin-left: 150px;
  position: absolute;
  rotate: -50deg;
  right: 45px;
  top: 165px;
`;

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

interface HangmanDrawingProps {
  numberOfGuesses: number;
}

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {bodyParts.slice(0, numberOfGuesses).map((BodyParty, index) => {
        return <BodyParty key={index} />;
      })}
      <StemSmall />
      <Horizontal />
      <Stem />
      <Base />
    </div>
  );
}
