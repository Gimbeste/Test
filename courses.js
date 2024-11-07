const createCourse = async (course) => {
    course.id = crypto.randomUUID();
    const kv = await Deno.openKv();
    await kv.set(["courses", course.id], course);
    await kv.close();
}

const listCourses = async () => {
    const kv = await Deno.openKv();
    const coursesEntries = await kv.list({prefix:["courses"]});

    const courses = [];
    for await (const entries of coursesEntries)
    {
        courses.push(entries.value);
    }
    kv.close();
    return courses;
}

const getCourse = async (id) => {
    const kv = await Deno.openKv();
    const course = await kv.get(["courses", id]);
    kv.close();
    return course?.value ?? {};
}

const deleteCourse = async (id) => {
    const kv = await Deno.openKv();
    console.log("Present" + id);
    await kv.delete(["courses", id]);
    kv.close();
}

export { createCourse , listCourses , getCourse , deleteCourse };