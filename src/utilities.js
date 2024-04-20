function titleCase(str) {
    return typeof str === 'string'
        ? str.replaceAll('.', ' ').replaceAll('_', ' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();})
        : '';
}

export {
    titleCase,
}