// this function accepts this.state.formdata.email as the element and then checks its validity on 
// the given template
export const validate = (element)=>{
    let error = [true, '']

    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = !valid? 'введите почту' : ''
        error =!valid ? [valid, message] : error; 
    }

    if(element.validation.required) {
        const valid = element.value.trim() !== ''
        const message = !valid ? 'это обязательное поле' : '';
        error = !valid ? [valid, message] : error; 
    }

    return error
}