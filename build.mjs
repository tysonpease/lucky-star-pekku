import { exec } from "child_process";

exec(`${process.env.PYTHON} build_site.py`, { cwd: `${process.cwd()}/src/scripts`}, (error, stdout, stderr) => {
    if (error) {
        return console.error(error)
    }

    console.log(stdout, stderr)
})