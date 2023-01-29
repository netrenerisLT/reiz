import { useEffect, useState } from "react";
import CitiesClass from "./models/cities";
import Pagination from "./components/Pagination";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

function App() {
  const [countries, setCountries] = useState<CitiesClass[]>([]);
  const [fetchedCountries, setFetchedCountries] = useState<CitiesClass[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(40);

  const indexOfLastCountries = currentPage * countriesPerPage;
  const indexOfFirstCountries = indexOfLastCountries - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountries,
    indexOfLastCountries
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const filteredCountries = (payload: CitiesClass[]) => {
    setCountries(payload);
  };
  const selectedCountry = fetchedCountries.find((country) => {
    return country.name === "Lithuania";
  });

  useEffect(() => {
    setIsLoading(true);
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((resp) => resp.json())
      .then((resp) => {
        setCountries(resp);
        setFetchedCountries(resp);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Filter
        filteredCountries={filteredCountries}
        countries={countries}
        fetchedCountries={fetchedCountries}
        smallerThanCountry={selectedCountry}
      />
      <Countries countries={currentCountries} loading={isLoading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
