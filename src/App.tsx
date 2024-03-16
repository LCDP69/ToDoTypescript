import { useRef, useState } from "react";
import Message from "./components/Message";
import { MessageInt } from './model';


const App: React.FC = () => {
  const inputMessage = useRef<HTMLInputElement | null>(null);
  const [messData, SetMessData] = useState<MessageInt[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(inputMessage) {
      const mess:MessageInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now()
      }
      SetMessData((prevData) => [...prevData, mess]);
    }

    (document.getElementById("inputMessage") as HTMLInputElement).value = "";
  }

  return (
    <div>
      <h2>Publier une tâche</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Entrez un message"
          id="inputMessage"
          ref={inputMessage}
        />
        <input type="submit" value="Envoyer" />
      </form>
      <h2>TO DO :</h2>
      <div>{messData?.map((mess) => (
        <Message mess={mess} messData={messData} setMessData={SetMessData} key={mess.id} />
      ))}</div>
    </div>
  );
};

export default App;
