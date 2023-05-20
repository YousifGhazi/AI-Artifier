import { useRouter } from "next/navigation";
import { useState } from "react";

const ShareBtn = ({ img, nameInputRef, promptInputRef }) => {
  const [uploadingImg, setUploadingImg] = useState(false);
  const router = useRouter();

  async function shareImg() {
    const name = nameInputRef?.current?.value;
    const prompt = promptInputRef?.current?.value;

    if (img !== "/placeholder.png" && name && prompt) {
      try {
        setUploadingImg(true);
        const res = await fetch("api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
            name,
            img,
          }),
        });
        await res.json();
        router.push("/");
      } catch (err) {
        alert("An error occurred while sharing the image");
      } finally {
        setUploadingImg(false);
      }
    } else {
      alert(
        "You have to fill the all input fields and generate an image first"
      );
    }
  }
  return (
    <button className="share-btn btn" onClick={shareImg}>
      {!uploadingImg ? "Share with the Community" : "Sharing..."}
    </button>
  );
};

export default ShareBtn;
