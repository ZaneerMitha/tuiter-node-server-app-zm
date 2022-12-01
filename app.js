import express from 'express'
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express()
app.use(express.json());
app.use(cors())
HelloController(app)
UserController(app)
TuitsController(app);
app.listen(process.env.PORT || 4000);

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);



