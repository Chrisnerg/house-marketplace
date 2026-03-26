
export const isUniqueConstraintError = (err) => {
    return err?.cause?.code === '23505';
}