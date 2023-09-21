import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 180px;
  background-color: khaki;
  position: absolute;
  top: 500px;
  left: 1600px;
  transition: all 0.5s ease;
  &.modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 650px;
    padding: 5px;
  }
`;
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div`
  margin: 10px 0;
  padding: 0 10px;
  transition: all 1s linear;
  opacity: 0;
  &.visible {
    opacity: 1;
  }
`;
function ModalBox() {
  const [isModal, setIsModal] = useState(false);
  const [modal, setModal] = useState("");
  const [visible, setVisible] = useState("");
  function onClick() {
    if (isModal) {
      setIsModal(false);
      setModal("");
      setVisible("");
    } else {
      setIsModal(true);
      setModal("modal");
      setTimeout(() => {
        setVisible("visible");
      }, 500);
    }
  }
  return (
    <>
      {isModal ? <Backdrop onClick={onClick} /> : null}
      <Box onClick={onClick} className={`box ${modal}`}>
        <Img src="https://picsum.photos/id/127/300/200" />
        {isModal ? (
          <>
            <Text className={visible}>
              <h2>사진제목</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                molestie vitae tortor et ullamcorper. Suspendisse vehicula
                luctus condimentum. Integer non purus in turpis viverra
                tincidunt. Nullam blandit, lorem ut blandit eleifend, felis nisi
                feugiat lacus, finibus consequat lacus diam eu mauris
              </p>
            </Text>
          </>
        ) : null}
      </Box>
    </>
  );
}

export function Modal() {
  return (
    <>
      <ModalBox />
    </>
  );
}
