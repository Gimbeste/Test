const getfeedback1 = async () => {
    const kv = await Deno.openKv();
    const count = await kv.get(["feedback1"]);
    return count.value ?? 0;
}

const getfeedback2 = async () => {
    const kv = await Deno.openKv();
    const count = await kv.get(["feedback2"]);
    return count.value ?? 0;
}

const getfeedback3 = async () => {
    const kv = await Deno.openKv();
    const count = await kv.get(["feedback3"]);
    return count.value ?? 0;
}

const incrementCount1 = async () => {
    const kv = await Deno.openKv();
    let count = await getfeedback1();
    console.log(Number(count) + 1);
    await kv.set(["feedback1"], Number(count) + 1);
}

const incrementCount2 = async () => {
    const kv = await Deno.openKv();
    let count = await getfeedback2();
    console.log(Number(count) + 1);
    await kv.set(["feedback2"], Number(count) + 1);
}

const incrementCount3 = async () => {
    const kv = await Deno.openKv();
    let count = await getfeedback3();
    console.log(Number(count) + 1);
    await kv.set(["feedback3"], Number(count) + 1);
}

export  { getfeedback1 , getfeedback2 , getfeedback3 , incrementCount1 , incrementCount2 , incrementCount3 } ;