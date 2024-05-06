import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOneTest } from "../http/testAPI";
import "../Styles/testPage.css";
import TestList from "../components/Test/TestList";

const TestPage = observer(() => {
  const params = useParams();
  const [test, setTest] = useState({ test: [] });
  useEffect(() => {
    fetchOneTest(params.id).then((data) => setTest(data));
  }, []);
  return (
    <div>
      <div className="testPage_conteiner _container">
        <div className="testPage-title">{test.topic}</div>
        <div className="testPage_List">
          <TestList />
        </div>
      </div>
    </div>
  );
});

export default TestPage;
