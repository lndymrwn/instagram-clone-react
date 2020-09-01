import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import { storage, db } from "./firebase";

function ImageUpload({username}) {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.targe.files[0]) {
      setImage(e.targe.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("image")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            db.collections("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username
            })

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    )
  }


  return(
    <div>
      <h1>abc</h1>
      {/* I want to have... */}
      {/* caption input */}
      {/* file picker */}
      {/* post button */}

      <progress value={progress} max="100"/>  
      <input type="text" placeholder="enter a caption" onChange={event=> setCaption(event.target.value)} value={caption}/>
      <input type="file" onChange={handleChange} />
      <Button className="imageupload__button" onClick={handleUpload}>Upload</Button> 
    </div>
  );
}

export default ImageUpload
