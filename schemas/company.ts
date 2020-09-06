import * as yup from 'yup';
import "yup-phone";

yup.setLocale({
    mixed: {
        required: 'Campo obbligatorio',
    },
    string: {
        email: 'Email non valida'
    }
})

const phoneRegExp = /^((\\+[1-9][1,9][ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const companySchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    phone: yup.string().phone("IT", false, "Numero di telefono non valido")
});

export type CompanySchemaType = yup.InferType<typeof companySchema>
