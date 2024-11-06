import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedback from "./feedbacks.js";

const app = new Hono();
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });



app.get("/feedbacks/1", async (c) => await c.text(`Feedback 1: ${await feedback.getfeedback1()}`));
app.get("/feedbacks/2", async (c) => await c.text(`Feedback 2: ${await feedback.getfeedback2()}`));
app.get("/feedbacks/3", async (c) => await c.text(`Feedback 3: ${await feedback.getfeedback3()}`));
app.get("/feedbacks/4", async (c) => await c.text(`Feedback 4: ${await feedback.getfeedback4()}`));
app.get("/feedbacks/5", async (c) => await c.text(`Feedback 5: ${await feedback.getfeedback5()}`));




app.get("/", (c) => {
    return c.html(eta.render("index.eta"));
});
  
app.post("/feedbacks/1", async (c) => {
    await feedback.incrementCount1();
    return c.redirect("/");
});

app.post("/feedbacks/2", async (c) => {
    await feedback.incrementCount2();
    return c.redirect("/");
});

app.post("/feedbacks/3", async (c) => {
    await feedback.incrementCount3();
    return c.redirect("/");
});

app.post("/feedbacks/4", async (c) => {
    await feedback.incrementCount4();
    return c.redirect("/");
});

app.post("/feedbacks/5", async (c) => {
    await feedback.incrementCount5();
    return c.redirect("/");
});



export default app;