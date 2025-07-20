import Axios from "axios";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import DataCard from "./components/DataCard";
import { type Driver } from "./types/types.ts";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const [direction, isRight] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);

  //useEffect to fetch data only once
  useEffect(() => {
    const fetchData = async () => {
      //async call
      try {
        const response = await Axios.get(
          "https://api.openf1.org/v1/drivers?meeting_key=latest&session_key=latest"
        );
        console.log(response.data);
        setDrivers(response.data);
        setLoading(false);
      } catch (err: any) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const changeCard = (isFwd: Boolean) => {
    //function expression to change the index of the card
    isRight(Boolean(isFwd));
    const idx = isFwd ? 1 : -1;
    if (selectedIndex + idx >= drivers.length) {
      setSelectedIndex(0);
    } else if (selectedIndex + idx < 0) {
      setSelectedIndex(drivers.length - 1);
    } else {
      setSelectedIndex(selectedIndex + idx);
    }
  };

  if (loading)
    return (
      <p className="text-amber-950 font-black text-xl italic">LOADING...</p>
    );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-row items-center justify-center flex-grow space-x-4 m-auto p-8 text-center"
      >
        <Button onClick={() => changeCard(false)} img="left.png" />

        <AnimatePresence mode="wait">
          {drivers.map((driver: Driver, idx: number) =>
            idx === selectedIndex ? (
              <motion.div
                key={driver.driver_number}
                initial={{ opacity: 0, x: direction ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: !direction ? -100 : 100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <DataCard driver={driver} />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        <Button onClick={() => changeCard(true)} img="right.png" />
      </motion.div>
    </>
  );
}

export default App;
