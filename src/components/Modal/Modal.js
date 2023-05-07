const styleBack = {
  backgroundColor: "#333333",
  opacity: "0.5",
  position: "absolute",
  top: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

const styleChild = {
  backgroundColor: "#cfcfcf",
  opacity: "1",
  position: "absolute",
  transform: "translate(50%,-50%)",
  width: "50%",
  height: "50%",
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",
};

export const Modal = ({ children }) => {
  return (
    <>
      <div style={styleBack}></div>
      <div style={styleChild}>{children}</div>
    </>
  );
};
