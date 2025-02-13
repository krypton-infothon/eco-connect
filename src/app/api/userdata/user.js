import Dashboard from "@/util/db";

export async function POST(req, res) {
    let { body } = await req.json;
    let loggedin = await Dashboard(body);
    console.log(body);
    console.log(loggedin)
    res.writeHeader(302, { Location: "/home" })
    res.end()
}