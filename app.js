import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as courseService from "./courses.js"
import * as feedback from "./feedbacks.js"

const app = new Hono();
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });



app.get("/courses/:id/feedbacks/1", async (c) => {
    const body = c.req.param("id");
    return await c.text(`Feedback 1: ${await feedback.getfeedback(body, 1)}`);
});

app.get("/courses/:id/feedbacks/2", async (c) => {
    const body = c.req.param("id");
    return await c.text(`Feedback 2: ${await feedback.getfeedback(body, 2)}`);
});

app.get("/courses/:id/feedbacks/3", async (c) => {
    const body = c.req.param("id");
    return await c.text(`Feedback 3: ${await feedback.getfeedback(body, 3)}`);
});

app.get("/courses/:id/feedbacks/4", async (c) => {
    const body = c.req.param("id");
    return await c.text(`Feedback 4: ${await feedback.getfeedback(body, 4)}`);
});

app.get("/courses/:id/feedbacks/5", async (c) => {
    const body = c.req.param("id");
    return await c.text(`Feedback 5: ${await feedback.getfeedback(body, 5)}`);
});



app.get("/", async (c) => {
    return c.html(eta.render("index.eta", {courses: await courseService.listCourses()} ));
});

app.get("/courses", async (c) => {
    return c.html(eta.render("courses.eta", {courses: await courseService.listCourses()} ));
});

app.get("/courses/:id", async (c) => {
    const id = await c.req.param("id");
    return c.html(eta.render("course.eta", {course: await courseService.getCourse(id)}));
});

app.post("/courses", async (c) => {
    const body = await c.req.parseBody();
    await courseService.createCourse(body);
    return await c.redirect("/courses");
});

app.post("/courses/:id", async (c) => {
    const id = await c.req.param("id");
    courseService.deleteCourse(id);
    return c.redirect("/courses");
});
app.post("/courses/:courseId/feedbacks/1", async (c) => {
    const body = await c.req.param("courseId");
    feedback.incrementCount(body, 1);
    return c.redirect(`/courses/${body}`);
});

app.post("/courses/:courseId/feedbacks/2", async (c) => {
    const body = await c.req.param("courseId");
    feedback.incrementCount(body, 2);
    return c.redirect(`/courses/${body}`);
});

app.post("/courses/:courseId/feedbacks/3", async (c) => {
    const body = await c.req.param("courseId");
    feedback.incrementCount(body, 3);
    return c.redirect(`/courses/${body}`);
});

app.post("/courses/:courseId/feedbacks/4", async (c) => {
    const body = await c.req.param("courseId");
    feedback.incrementCount(body, 4);
    return c.redirect(`/courses/${body}`);
});

app.post("/courses/:courseId/feedbacks/5", async (c) => {
    const body = await c.req.param("courseId");
    feedback.incrementCount(body, 5);
    return c.redirect(`/courses/${body}`);
});



export default app;