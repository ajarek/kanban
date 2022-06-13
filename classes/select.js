export class Select {
   
    constructor(classSelect){
      this.classSelect = classSelect;   
    }
    render() {
      const select = document.createElement("select");
      select.classList.add(this.classSelect);
      return select;
    }
    renderOption(optionValue,optionText){
        const option = document.createElement("option");
        option.innerHTML = optionText
        option.value =optionValue
        return option
        }
  }