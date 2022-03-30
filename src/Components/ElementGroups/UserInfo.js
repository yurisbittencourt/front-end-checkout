import { Fragment } from "react";
import { Text } from "../../Styles/Elements";

const UserInfo = () => {
  return (
    <Fragment>
      <Text fontSize="14px" gray>
        John Smith
      </Text>
      <Text fontSize="14px" gray>
        Phone no: 01312428200
      </Text>
      <Text fontSize="14px" gray>
        Address: Redwood City, 2000.
      </Text>
    </Fragment>
  );
};

export default UserInfo;
