import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../../contextAPI/StateProvider";

import "./MessageSender.css";

function MessageRender() {

  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Some clever db stuff

    setInput("");
    setImageUrl("")
  };

  return (

    <div className="messageRender">
      <div className="messageRender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageRender__input"
            type="text"
            placeholder={`What's on your mind, ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL {Optional}"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageRender__bottom">
        <div className="messageRender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageRender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageRender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageRender;
