export function toInt(value: string) {
  return parseInt(value, 10) || 0;
}

export function toString(value: number): string {
  return value.toString();
}

export function getFullDate() {
  const date = new Date()
    .toString()
    .replace(/[A-Z]{3}\+/, '+')
    .split(/ /);

  return `${date[2]}-${date[1]}-${date[3]}:${date[4]} ${date[5]}`;
}

export const calculateValueInArray = (array: any[], key: string) => {
  return array.reduce(
    (acumulattor, current) => acumulattor + toInt(current[key]),
    0,
  );
};

export function makeError(param: string, message: string) {
  return [
    {
      message,
      param,
    },
  ];
}

export function parseJSON(jsonString: string) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    throw new Error('INVALID_JSON');
  }
}

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const transactionId = () =>
  `${Date.now()}:${getRandomInt(0, 999999).toString().padStart(6, '0')}`;

export const formatHeader = (object: any) => {
  return {
    headers: object,
  };
};

export const getUrlImageLogo = (id: string) => {
  return `https://pagtel.com.br/whosales/img/${id}.png`;
};

export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
