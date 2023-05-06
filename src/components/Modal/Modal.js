const styles = {
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

export const Modal = ({ children }) => {
  return (
    <>
      <div style={styles}>
        <div>{children}</div>
      </div>
    </>
  );
};
