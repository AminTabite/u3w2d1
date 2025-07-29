import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useState, useEffect } from "react";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [isError, setIserror] = useState(false);

  const Getcomment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODg3NzY4NTEyODg5NzAwMTVmMjdiYmMiLCJpYXQiOjE3NTM3MDgxNjUsImV4cCI6MTc1NDkxNzc2NX0.i6q7Cc1YFfIM4pf2OoI2sNoh8T83WWwOWW2jgFdoz08",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setIserror(false);
        setComments(comments);
        setIsloading(false);
      } else {
        setIserror(true);
        setIsloading(false);
      }
    } catch (error) {
      console.log(error);
      setIsloading(false);
      setIserror(true);
    }
  };

  useEffect(() => {
    Getcomment();
  }, [props.asin]);

  return (
    <div className="text-center">
      {isloading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
