const GenerateBtn = ({ setImg, promptInputRef, setLoading }) => {
  async function generateImg() {
    const prompt = promptInputRef.current.value;
    if (prompt) {
      try {
        setLoading(true);
        const data = await fetch("/api/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: prompt }),
        }).then((res) => res.json());

        setImg(`data:image/jpeg;base64,${data.image}`);
      } catch (err) {
        alert("An error occurred while generating the image");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Prompt field can't be empty");
    }
  }

  return (
    <button className="generate-btn btn" onClick={generateImg}>
      Generate
    </button>
  );
};

export default GenerateBtn;
