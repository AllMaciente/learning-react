import "./styles.css";
import List from "../../components/List";
import Video from "../../components/Video";
import Form from "../../components/Form";

function Home() {
  return (
    <>
      <main class="container">
        <List titulo={"CAsa"} />
        <Video />
        <Form />
      </main>
    </>
  );
}

export default Home;
