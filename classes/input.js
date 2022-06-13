export class Input{
    constructor(type,placeholder,classList){
        this.type=type
        this.placeholder=placeholder
        this.classList=classList
    }
    render(){
        const input=document.createElement('input')
        input.classList.add(this.classList)
        input.setAttribute('type',this.type)
        input.setAttribute('placeholder',this.placeholder)
        return input     
    }
}