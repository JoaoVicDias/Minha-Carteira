const validation = (type: string, value: string ) => {
    let isValid: boolean = true
    let rules: object | any = {}

    switch (type) {
        case 'name':
            rules = {
                minLength: 4,
                maxLength: 40,
                required: true
            }
            break;

        case 'email':
            rules = {
                minLength: 4,
                maxLength: 40,
                required: true
            }
            break;

        case 'password': 
        case 'secondPassword':
            rules = {
                minLength: 7,
                maxLength: 20,
                required: true
            }
            break;

        default:
            rules = {
                required: true
            }
            break;
    }


    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid
    }

    return isValid
}

export default validation