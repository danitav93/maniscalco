export const emptyValue = '---';
export function formatEmptyValue(value?: string | null) {
    return value ? value : emptyValue
}
