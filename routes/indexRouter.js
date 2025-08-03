const indexController = require("../controllers/indexController");
const app = express();

app.get("/", indexController.createHomepage);
