import React, { useEffect } from "react";
import Listar from "../listar/Listar";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../redux/action-creator/Location";
export default function List() {
  const location = useSelector((store) => store.location.location);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLocation("list"));
  }, [location]);
  return (
    <div>
      {/* <CrearLista /> */}
      <Listar />
    </div>
  );
}
