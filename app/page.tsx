import Image from 'next/image'

const getCountries = async (): Promise<Country[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  return response.json();
};

const Home = async () => {
  const countries = await getCountries();

  return (
    <section className='container grid grid-cols-5 w-full gap-2 mt-16'>
      { countries.map((country) => (
        <article
          className='h-64 min-w-full p-2 bg-white border-2 rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl' 
          key={ country.name.common }>
            <div className='relative w-full h-40 p-2 overflow-hidden rounded-xl'>
              <Image
                fill
                src={ country.flags.svg }
                alt={ country.flags.alt }
                className='object-cover'
              />
            </div>
            <h1 className='font-bold text-xl text-center mt-2'> { country.translations.por.common } </h1>
        </article>
      ))};
    </section>
  );
};

export default Home;