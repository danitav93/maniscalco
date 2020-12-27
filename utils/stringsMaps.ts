import {Cure, Disease} from "../dbApi";

export const DiseaseStringMap: { [key in Disease]: string } = {
    [Disease.DERMATITE_DIGITALE]: 'Derm. digitale',
    [Disease.DERMATITE_INTERFIGITALE]: 'Derm. interfigitale',
    [Disease.FLEMMONE_INTERDIGITALE]: 'Derm. interdigitale',
    [Disease.LAMINITE]: 'Laminite',
    [Disease.ULCERA_SOLEARE]: 'Ulcera soleare'
}

export const CureStringMap: { [key in Cure]: string } = {
    [Cure.FASCIATURA]: 'Fasciatura',
    [Cure.SOLETTA]: 'Soletta'
}
