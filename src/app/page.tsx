import Header from "./_components/header";
import Search from "./_components/search";

function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
    </>
  );
}

export default Home;
