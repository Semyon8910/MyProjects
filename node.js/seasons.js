const seasonName = (englishName) => {
    const season = {
        'winter': 'חורף',
        'spring': 'אביב',
        'summer': 'קיץ',
        'autumn': 'סתו'
    }
    console.log(season[englishName]);
}

seasonName('autumn');

