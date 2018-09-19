export const weatherBG = {
  "bkn_-ra_d": require('./_assets/images/09d.jpg'),
  "bkn_-ra_n": require('./_assets/images/09n.jpg'),
  "bkn_-sn_d": require('./_assets/images/13d.jpg'),
  "bkn_-sn_n": require('./_assets/images/13n.jpg'),
  "bkn_d": require('./_assets/images/02d.jpeg'),
  "bkn_n": require('./_assets/images/02n.jpg'),
  "bkn_ra_d": require('./_assets/images/04d.jpeg'),
  "bkn_ra_n": require('./_assets/images/04n.jpg'),
  "bkn_sn_d": require('./_assets/images/13d.jpg'),
  "bkn_sn_n": require('./_assets/images/13n.jpg'),
  "bl": require('./_assets/images/50n.jpg'),
  "fg_d": require('./_assets/images/50d.jpg'),
  "ovc": require('./_assets/images/03d.jpg'),
  "ovc_-ra": require('./_assets/images/10d.jpg'),
  "ovc_-sn": require('./_assets/images/10n.jpeg'),
  "ovc_ra": require('./_assets/images/09d.jpg'),
  "ovc_sn": require('./_assets/images/50n.jpg'),
  "ovc_ts_ra": require('./_assets/images/11d.jpg'),
  "skc_d": require('./_assets/images/01d.jpg'),
  "skc_n": require('./_assets/images/01n.jpeg')
}

export const weatherTranslate = {
  "clear": "ясно",
  "partly-cloudy": "малооблачно",
  "cloudy": "облачно с прояснениями",
  "overcast": "пасмурно",
  "partly-cloudy-and-light-rain": "небольшой дождь",
  "partly-cloudy-and-rain": "дождь",
  "overcast-and-rain": "сильный дождь",
  "overcast-thunderstorms-with-rain": "сильный дождь, гроза",
  "cloudy-and-light-rain": "небольшой дождь",
  "overcast-and-light-rain": "небольшой дождь",
  "cloudy-and-rain": "дождь",
  "overcast-and-wet-snow": "дождь со снегом",
  "partly-cloudy-and-light-snow": "небольшой снег",
  "partly-cloudy-and-snow": "снег",
  "overcast-and-snow": "снегопад",
  "cloudy-and-light-snow": "небольшой снег",
  "overcast-and-light-snow": "небольшой снег",
  "cloudy-and-snow": "снег"
}

export const windDir = {
  "nw": "северо-западный",
  "n": "северный",
  "n»": "северо-восточный",
  "e": "восточный",
  "se": "юго-восточный",
  "s": "южный",
  "sw": "юго-западный",
  "w": "западный",
  "с": "штиль"
}

export const convertDate = (stringDate) => {
  const date = new Date(stringDate);
  const day = date.getDay();
  const dayOfWeek = {
    0: 'Вс',
    1: 'Пн',
    2: 'Вт',
    3: 'Ср',
    4: 'Чт',
    5: 'Пт',
    6: 'Сб',
  };

  return `${dayOfWeek[day]} ${date.toLocaleDateString().slice(0, -5)}`;
}
/*
bkn_-ra_d — облачно с прояснениями, небольшой дождь (день)
bkn_-ra_n — облачно с прояснениями, небольшой дождь (ночь)
bkn_-sn_d — облачно с прояснениями, небольшой снег (день)
bkn_-sn_n — облачно с прояснениями, небольшой снег (ночь)
bkn_d — переменная облачность (день)
bkn_n — переменная облачность (ночь)
bkn_ra_d — переменная облачность, дождь (день)
bkn_ra_n — переменная облачность, дождь (ночь)
bkn_sn_d — переменная облачность, снег (день)
bkn_sn_n — переменная облачность, снег (ночь)
bl — метель
fg_d — туман
ovc — облачно
ovc_-ra — облачно, временами дождь
ovc_-sn — облачно, временами снег
ovc_ra — облачно, дождь
ovc_sn — облачно, снег
ovc_ts_ra — облачно, дождь, гроза
skc_d — ясно (день)
skc_n — ясно (ночь)
*/
