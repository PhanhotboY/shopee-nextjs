const formatterCurrencyString = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'VND',
});

export function toCurrencyString(number) {
  return formatterCurrencyString.format(number).replace(/,/g, '.');
}

export function toThousandUnitString(number = 0, precision = 0) {
  if ((Number(number) || 0) < 1000) return number;

  return (
    (
      Math.floor(((Number(number) || 0) * 10 ** precision) / 1000) /
      (10 ** precision || 1)
    )
      .toString()
      .replace('.', ',') + 'k'
  );
}

export function getDiscountedPrice(origin, discount) {
  const discountedPrice = origin - (origin * discount) / 100;
  return discountedPrice >= 0 ? discountedPrice : 0;
}

export function splitQueryIntoObj(query) {
  const queryArr = query.slice(1).split('&');

  const keyValueObj = queryArr.reduce((prevObj, currStr) => {
    const keyValueArr = currStr.split('=');
    if (keyValueArr[0] && keyValueArr[1]) {
      prevObj[decodeURIComponent(keyValueArr[0].trim())] = decodeURIComponent(
        keyValueArr[1] ? keyValueArr[1].trim() : ''
      );
    }

    return prevObj;
  }, {});

  return keyValueObj;
}

export function toQueryString(object) {
  let queryString = '';

  Object.entries(object).forEach(([key, value]) => {
    if (key)
      queryString +=
        (queryString.indexOf('?') === -1 ? '?' : '&') +
        `${key}=${encodeURIComponent(value || '')}`;
  });

  return queryString;
}

export function getImageURL(avatar) {
  return avatar.indexOf('https://') !== -1
    ? avatar
    : `${process.env.IMAGE_URL}/${avatar}`;
}
