import {Animal} from "../dbApi";

export function animalSort(a: Animal, b: Animal) {
    return a.label.toUpperCase() < b.label.toUpperCase() ? -1 : 1
}
