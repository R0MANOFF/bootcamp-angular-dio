//decarators

function apiVersion(version: string){
    return(target)=>{
        Object.assign(target.prototype, {__version: version})
    }
}

@apiVersion("1.0")
class Api{}

const api = new Api()
console.log(api.__version)
