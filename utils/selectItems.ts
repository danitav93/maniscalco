import {CureStringMap, DiseaseStringMap} from "./stringsMaps";

export const diseaseItems = Object.entries(DiseaseStringMap).map(([key, value]) => ({
    value: key,
    label: value,
}))

export const cureItems = Object.entries(CureStringMap).map(([key, value]) => ({
    value: key,
    label: value,
}))
