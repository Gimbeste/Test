import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedback from "./feedbacks.js";

const app = new Hono();

app.get("/feedbacks/1", async (c) => await c.text(`Feedback 1: (${await feedback.getfeedback1()})`));
app.get("/feedbacks/2", async (c) => await c.text(`Feedback 2: (${await feedback.getfeedback2()})`));
app.get("/feedbacks/3", async (c) => await c.text(`Feedback 3: (${await feedback.getfeedback3()})`));
app.post("/feedbacks/1", async (c) => await c.text(await feedback.incrementCount1()));
app.post("/feedbacks/2", async (c) => await c.text(await feedback.incrementCount2()));
app.post("/feedbacks/3", async (c) => await c.text(await feedback.incrementCount3()));

app.post("/*", (c) => c.text("Ultratg"));


export default app;
