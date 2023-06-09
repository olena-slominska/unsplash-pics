import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import NoResultsMessage from './components/NoResultsMessage';

let noResultsContent = null;

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const res = await searchImages(term);

    if (res.length === 0) {
      noResultsContent = <NoResultsMessage query={term} />
      setImages(res);
    } else {
      setImages(res);
      noResultsContent = null;
    }
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      {noResultsContent}
      <ImageList images={images} />
    </div>
  );
};

export default App;
