const dateTranslate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Jakarta' };
    const indonesianDate = new Date(date).toLocaleDateString('id-ID', options);
    return indonesianDate;
}

export default dateTranslate;