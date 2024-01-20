import { useState } from "react";
import TicTacToeModel from "../model/TicTacToeModel";
import Elem from "../view_component/Elem";
import "./tictactoe.css";
const tictactoeModel = new TicTacToeModel();
/* komponensen kívül példányosítjük a modelt */
export default function TicTacToe(props) {
  //const list = tictactoeModel.getList();

  const [list, setList] = useState(tictactoeModel.getList());
  const [jatekos /* változónév */, setAktJatekos /* függvény */] = useState(
    tictactoeModel.getAktJatekos()
  );

  function kattintas(id) {
    /* itt kezeljük a gyerektől jövő infót - SZÜLŐ komponensben */
    console.log(id);
    tictactoeModel.setAllapot(id);
    /* Újra lekérjük a lista értékét */
    setList(tictactoeModel.getList());
    setAktJatekos(tictactoeModel.getAktJatekos());
  }

  const [szam, setSzam] = useState(0);

  function novel() {
    setSzam(szam + 1);
  }

  return (
    <div className="jatek">
      <div className="pelda">
        <h3>State használat példa</h3>
        <button onClick={novel}>növel</button>
        <p>{szam}</p>
      </div>
      <h2> Tic-Tac-Toe</h2>
      <div className="jatekter">
        {list.map((elem, index) => {
          return (
            <Elem
              kattintas={kattintas}
              ertek={elem}
              key={index}
              index={index}
            />
          );
        })}
      </div>
      <p>Következő Játékos: {jatekos}</p>
    </div>
  );
}
