import React, { useState } from "react";
import styled from "styled-components";
import "./styles.css";

export default function App() {
  const [hashTagList, setHashTagList] = useState([""]);

  const handleHashTagEntered = ({ target: { value } }, index) => {
    let hashTagIndex = hashTagList.length - 1;
    if (index === hashTagIndex) {
      const newHashTag = hashTagList;
      newHashTag[index] = value;
      setHashTagList(newHashTag);

      if (hashTagList[hashTagIndex] !== "") {
        hashTagList[hashTagList.length] = "";
        setHashTagList([...newHashTag]);
      }
    } else {
      const newHashTag = hashTagList;
      newHashTag[index] = value;

      if (newHashTag[index] === "") {
        newHashTag.splice(index, 1);
      }
      setHashTagList((_list) => [...newHashTag]);
    }
  };

  return (
    <div className="App">
      <HashTagInputAreaWithStyled>
        {hashTagList.map((value, index) => {
          return (
            <HashTagInputWrapperWithStyled key={index}>
              #
              <HashTagInputWithStyled
                type="text"
                key={index}
                value={hashTagList[index]}
                onChange={(event) => handleHashTagEntered(event, index)}
              />
            </HashTagInputWrapperWithStyled>
          );
        })}
      </HashTagInputAreaWithStyled>
    </div>
  );
}

const HashTagInputAreaWithStyled = styled.div`
  margin-left: 20px;
`;

const HashTagInputWrapperWithStyled = styled.span`
  display: block;
`;

const HashTagInputWithStyled = styled.input`
  width: 200px;
  padding: 7px;
  margin-bottom: 5px;
  line-height: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
`;
