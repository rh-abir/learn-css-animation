import { useEffect, useState } from "react";
import "./App.css";

import { motion, useAnimationControls } from "framer-motion";

function App() {
  const conltrols = useAnimationControls();

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    conltrols.start((i) => ({ x: 200, transition: { delay: i * 0.5 } }));
  }, []);

  // const handleForward = () => {
  //   setToggle((pre) => !pre);

  //   if (toggle) {
  //     conltrols.start({ x: 200 });
  //   } else {
  //     conltrols.start({ x: -200 });
  //   }
  // };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border border-red-400 rounded-md  size-[500px] flex flex-col justify-center items-center">
        <button className="bg-green-400 mb-10 px-3 py-2">Forward</button>

        <motion.div
          animate={conltrols}
          custom={1}
          className="size-40 bg-indigo-400 rounded-lg"
        ></motion.div>
        <motion.div
          animate={conltrols}
          custom={2}
          className="size-40 bg-indigo-400 rounded-lg"
        ></motion.div>
        <motion.div
          custom={3}
          animate={conltrols}
          className="size-40 bg-indigo-400 rounded-lg"
        ></motion.div>
      </div>
    </div>
  );
}

export default App;
