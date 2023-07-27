import { useTheme } from "../context/ThemeContext"

const withBlackBackground = (WrappedComponent) => {
    const WithBlackBackground = (props) => {
        const { darkTheme } = useTheme();

        return (
            <div style={{ backgroundColor: darkTheme ? "#FFF" : "#000", minHeight: "100vh", maxHeight: "1000vh" }}>
                <WrappedComponent {...props} />
            </div>
        )

    }
    return WithBlackBackground
}

export default withBlackBackground;
