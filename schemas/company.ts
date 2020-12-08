import * as yup from 'yup';
import "yup-phone";

yup.setLocale({
    mixed: {
        required: 'Campo obbligatorio',
    },
    string: {
        email: 'Email non valida'
    },
})

export const companySchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    phone: yup.string().phone("IT", false, "Numero di telefono non valido")
});

export const sessionSchema = yup.object().shape({
    date: yup.string().required(),
    price: yup.number().required().typeError('Numero non valido'),
});
