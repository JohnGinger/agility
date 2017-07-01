import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "body-container": React.HTMLProps<HTMLElement>;
    }
  }
}

const App = () => {
  return (
    <MuiThemeProvider>
      <body-container>
        <AppBar title="Agility" iconElementLeft={<span />} />
        <span>Some items</span>
      </body-container>
    </MuiThemeProvider>
  );
};

export default App;
