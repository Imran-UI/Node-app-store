const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

// handling error page

app.use((req, resp, next) => {
	// resp.status(404).sendFile(path.join(__dirname, "views", "404.html"));
	resp.render("404", {title: "404NotFound"});
});

app.listen(3000);
