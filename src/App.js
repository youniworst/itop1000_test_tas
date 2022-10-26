import { Loader, Header, Converter } from "./components";
import { useLoading } from "./hooks";

function App() {
  const { loading } = useLoading();
  return (
    <>
      {loading && <Loader />}
      <Header />
      <main>
        <Converter />
      </main>
    </>
  );
}

export default App;
