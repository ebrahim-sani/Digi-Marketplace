import { Button } from "@material-ui/core";
import React from "react";
import RightContent from "./inner-component/RightContent";
import "./SmallDesc.css";

function SmallDesc() {
  return (
    <div className="desc">
      <div className="desc__component">
        <div className="left_component">
          <h3>Quality We Ensure</h3>
          <p>
            Nowadays website is the most productive media for marketing your
            business. So having a high-quality website is a key tool to reach to
            your potential customers. A non-responsive, unsecured,
            user-unfriendly, slow, outdated, and buggy website never help you to
            fulfill your target. With our Eagle Eye, we can spot every tiny
            flaw. So our finished product is error-free, accurate, and
            top-notch.
          </p>
          <Button
            variant="outlined"
            color="primary"
            style={{
              marginTop: 20,
              padding: 16,
              width: 200,
              borderRadius: 20,
            }}
          >
            Just Explore
          </Button>
        </div>
        <div className="right_component">
          <div className="smallDesc__content">
            <RightContent
              head="Easy to Maintain"
              img="/easy.png"
              desc="User interface and user experience both are super important for a website. We are very careful to provide best user friendly, nice looking websites."
            />
            <RightContent
              head="Scallable Software"
              img="/scale.png"
              desc="User interface and user experience both are super important for a website. We are very careful to provide best user friendly, nice looking websites."
            />
            <RightContent
              head="Multiple User"
              img="/multiple.png"
              desc="User interface and user experience both are super important for a website. We are very careful to provide best user friendly, nice looking websites."
            />
          </div>
          <div className="content">
            <RightContent
              head="Very Durable"
              img="/hard.png"
              desc="User interface and user experience both are super important for a website. We are very careful to provide best user friendly, nice looking websites."
            />
            <RightContent
              head="Mobile & Desktop"
              img="/mo&des.png"
              desc="User interface and user experience both are super important for a website. We are very careful to provide best user friendly, nice looking websites."
            />
            <RightContent
              head="Super Power"
              img="/power.png"
              desc="User interface and user experience both are super important for a website. We are very careful to provide best user friendly, nice looking websites."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallDesc;
