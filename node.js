import os, { homedir } from "os"
import func1 from './welcome.js'

const homedir = os.homedir()
console.log(homedir)

const hostname = os.hostname()
console.log(hostname)

const version = os.version()
console.log(version)

const type = os.type()
console.log(type)