export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency',
    }).format(quantity);
}

export function formatDate(isoString: string){
    const date = new Date(isoString);

    return new Intl.DateTimeFormat('es-Es', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
}