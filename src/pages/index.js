import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Canvas } from "@react-three/fiber";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectAge } from "../redux/user/user-slice";

const IndexPage = () => {
  const dispatch = useDispatch();
  const age = useSelector(selectAge);

  return (
    <Layout>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>Age:{age}</span>
    </Layout>
  );
};

export default IndexPage;
