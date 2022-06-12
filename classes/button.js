export class Button{
    constructor(text,onClick,className){
        this.text=text
        this.onClick=onClick
        this.className=className
    }
    render(){
        const button=document.createElement('button')
        button.classList.add(this.className)
        button.innerText=this.text
        button.addEventListener('click',this.onClick)
        return button
    }
}