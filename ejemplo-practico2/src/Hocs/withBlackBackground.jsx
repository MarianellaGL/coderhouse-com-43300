import { useTheme } from "../Context/ThemeContext";

const withBlackBackground = (WrappedComponent) => {
  const WithBlackBackground = (props) => {
    const { darkTheme } = useTheme();

    return (
      <div style={{
        backgroundColor: darkTheme ? "#000" : "#FFF", minHeight: "100vh", maxHeight: "1000vh"
      }
      }>
        <WrappedComponent {...props} />
      </div >
    );
  };

  return WithBlackBackground;
};

export default withBlackBackground;