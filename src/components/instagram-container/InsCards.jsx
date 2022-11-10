import { Row, Grid } from "@nextui-org/react";
import InsCardItem from "./InsCardItem";

export default function InsCards(props) {
  console.log(props);
  const result = props.insPosts.map((item) => {
    return (
      <InsCardItem
        key={item.id}
        id={item.id}
        username={item.username}
        text={item.text}
        insImg={item.insImg}
        link={item.link}
        media={item.media_type}
        timestamp={item.timestamp}
      />
    );
  });
  return <Grid>{result}</Grid>;
}
