import { Button, Typography } from "@mui/material";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
const NoItemExists = (props) => {
  const { title, buttonText, onBack } = props;
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <Typography>{title ? title : "The element was not found "}</Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          if (onBack) {
            onBack();
            return;
          }
          navigate(-1);
        }}
      >
        {buttonText ? buttonText : "Go Back"}
      </Button>
    </div>
  );
};
export default NoItemExists;
