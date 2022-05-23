import os from "os"

export default function one () {
    return `Привет, юзер. Вижу ты зашел с ${os.type()}`
}
console.log(one())