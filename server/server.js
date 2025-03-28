const app = require("./src/app")
require("dotenv").config()

app.get('/', (req, res) => {
    res.send("HomePage")
})

app.listen(5000, () => {
console.log(`Server on http://localhost:5000`);

})



