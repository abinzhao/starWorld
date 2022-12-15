import React from "react";
import { Text, Button, Icon } from "@ui-kitten/components";

const FacebookIcon = (props: any) => <Icon name="facebook" {...props} />;

export default () => {
  return <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>;
};
