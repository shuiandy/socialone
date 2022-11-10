import { Grid } from "@nextui-org/react";
import FbCardItem from "./FbCardItem";
export default function FbCards(props) {
  const result = props.fbPosts.map((item) => {
    return (
      <FbCardItem
        key={item.id}
        id={item.id}
        timestamp={item.created_time}
        fbImage={item.fbImage}
        text={item.text}
      />
    );
  });
  return <Grid>{result}</Grid>;
}
