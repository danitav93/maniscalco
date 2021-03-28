import * as yup from 'yup';
import "yup-phone";

const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;


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
    date: yup.string().required().matches(dateRegex, "Formato non corretto"),
    price: yup.number().required().typeError('Numero non valido'),
});

export const animalSchema = yup.object().shape({
    label: yup.string().required(),
})
