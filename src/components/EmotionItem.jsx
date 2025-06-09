import React from "react";
import { getEmotionImage } from "../utils/get-emotion-image";
import "./EmotionItem.css";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}>
      <img
        src={getEmotionImage(emotionId)}
        alt={emotionName}
        className="emotion_img"
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
