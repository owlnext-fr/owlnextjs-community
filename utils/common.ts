import { DateTime } from "luxon";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

export const numberFormat = (nb: string): string => {
  return nb.toString().replace(/\./,',').split(/(?=(?:\d{3})+(?:,|$))/g).join(" ");
}

export const floatFormat = (nb: string): string => {
  return nb.toString().replace(/\,/,'.').replaceAll(' ', '').replaceAll(/[a-zA-Z]/g,'');
}

export const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const validatePhone = (phone: string): boolean => {
  const re = /^\d{10}$/
  return re.test(String(phone).toLowerCase())
}


export const formatPhoneNumber = (number: string): string => {
  if (typeof(number) !== 'undefined' && number) {
    var nonInt = /\D/g;
    var allNumbers = /.*(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/;
    var formatStyle = "0$1 $2 $3 $4 $5";
    return number.replace(nonInt, '').replace(allNumbers, formatStyle)
  } else {
    return '-'
  }
}

export const formatAge = (dateString: string): string => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  return age.toString();
}

export const formatDate = (inputDate: string): string => {
  if (inputDate !== null) {
    const luxonDate = DateTime.fromSQL(inputDate.split('T')[0])

    return luxonDate.toLocaleString(DateTime.DATE_FULL)
  } else {
    return '-'
  } 
}

export const validatePassword: (testString: string) => boolean = (testString) => {
  return !!testString
    .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@.#&+\-%;\/?!:)(={}*+$€~])[A-Za-z\d_@.#&+\-%;\/?!:)(={}*+$€~]{8,}$/)
}

export const getUniqueDeviceId = async (): Promise<string> => {
  return new Promise((async (resolve, reject) => {
    try {
      const fp = await FingerprintJS.load()
      const result = await fp.get()
      const { visitorId } = result

      resolve(visitorId)
    } catch (error) {
      reject('-1')
    }
  }))
};

export const checkNumber = (input: string): string => {
  let final = input.replace(/\D/g,'');

  return final
}