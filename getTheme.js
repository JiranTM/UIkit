var fs = require("fs-extra");
var path = require("path");

var printMessage = require('print-message');

try {
    fs.copySync(
        path.join(__dirname, "styles.js"),
        path.join(process.cwd())
    );
    printMessage(
        [
            "styles.js successfully copied to " + process.cwd(),
            "Here's how to theme your app",
            "",
            "import theme from './styles';",
            "export default class ThemeExample extends Component {",
            "render() {",
            "  return (",
            "    <ThemeProvider  style={theme}>",
            "      <Container>",
            "        <Content>",
            "          ...",
            "        </Content>",
            "      </Container>",
            "    </StyleProvider>",
            "  );",
            "}",
            "",
        ],
        {
            color: "yellow",
            borderColor: "green"
        }
    )
} catch(err) {
    console.log("Error:", err)
}
