import { useState, useRef } from "react";
import GenerateBtn from "@/components/GenerateBtn";
import RandomPromptBtn from "@/components/RandomPromptBtn";
import Loader from "@/components/Loader";
import ShareBtn from "@/components/ShareBtn";

const page = () => {
  const [img, setImg] = useState("/placeholder.png");
  const [Loading, setLoading] = useState(false);

  const promptInputRef = useRef();
  const nameInputRef = useRef();

  return (
    <div className="create-image content">
      <div className="container">
        <h1 className="title">create</h1>
        <p className="text">
          Generate an imaginative image through DALL-E AI and share it with
          the community
        </p>
        <div className="text-input">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            placeholder="..."
            ref={nameInputRef}
          />
        </div>
        <div className="text-input">
          <label htmlFor="prompt">
            Prompt{" "}
            <RandomPromptBtn
              promptInputRef={promptInputRef}
            ></RandomPromptBtn>
          </label>
          <input
            type="text"
            id="prompt"
            placeholder="..."
            ref={promptInputRef}
          />
        </div>

        <div className="generated-image">
          {Loading && <Loader></Loader>}
          <img src={img} alt="generated image" />
        </div>
        <GenerateBtn
          setLoading={setLoading}
          setImg={setImg}
          promptInputRef={promptInputRef}
        ></GenerateBtn>
        <p className="text">
          * Once you have created the image you want, you can share it with
          others in the community
        </p>
        <ShareBtn
          nameInputRef={nameInputRef}
          promptInputRef={promptInputRef}
          img={img}
        ></ShareBtn>
      </div>
    </div>
  );
};

export default page;
