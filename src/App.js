import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { useLoading } from "./hooks";

function App() {
  const { loading } = useLoading();
  return (
    <>
      {loading && <Loader />}
      <Header />
    </>
  );
}

export default App;
