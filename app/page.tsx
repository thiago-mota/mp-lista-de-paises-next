import Image from 'next/image'

const getCountries = async (): Promise<Country[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  return response.json();
};
