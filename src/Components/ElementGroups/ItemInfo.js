import { Fragment } from "react";
import { Text, Gap } from "../../Styles/Elements";

const ItemInfo = ({ description, color, id }) => {
  return (
    <Fragment>
      <Text fontSize="18px">{description}</Text>
      <Gap height="10px" />
      <Text fontSize="15px" gray>
        1 {color} Size 41
      </Text>
      <Text fontSize="15px" gray>
        Item #{id}
      </Text>
    </Fragment>
  );
};

export default ItemInfo;
