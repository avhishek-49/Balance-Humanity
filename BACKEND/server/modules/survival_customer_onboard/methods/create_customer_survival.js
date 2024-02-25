"use strict";
import { createAbiltySql } from "../sql/index.js";

const myModule = (() => {
  const createAbilty = async (req,res) => {

    const createObj ={

        name :req.name,
        number:req.number,

    }

    //todo.....
  };

  return { default: createAbilty };
})();

export default myModule.default;
