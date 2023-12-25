import { exec } from "child_process";

const buildCommand = `${process.env.PYTHON} build_site.py --delete-scheduled-posts`
const options = { cwd: `${process.cwd()}/src/scripts` }
const handleOutput = (error, stdout, stderr) => {
    if (error) { return console.error(error) }
    return console.log(stdout, stderr)
}

exec(buildCommand, options, handleOutput)
