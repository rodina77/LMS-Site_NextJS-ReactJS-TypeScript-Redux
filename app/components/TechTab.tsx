"use client";

import { Tabs } from "@chakra-ui/react";
import TechNavigationContent from "./TechNavigationContent";

export const TecTab = () => {
  return (
    <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
      <Tabs.List>
        <Tabs.Trigger style={{margin:'0px 20px'}} value="tab-1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger style={{margin:'0px 20px'}} value="tab-2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger style={{margin:'0px 20px'}} value="tab-3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab-1" >
        <TechNavigationContent
          title={
            "You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool."
          }
          subTitle={
            "The way that you teach — what you bring to it — is up to you."
          }
          question={"How we help you"}
          description={
            "We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized."
          }
          imgSrc={
            "/imgs/pngtree-being-late-employee-in-office-picture-image_8506087.png"
          }
        />
      </Tabs.Content>
      <Tabs.Content value="tab-2" >
        <TechNavigationContent
          title={
            "Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start."
          }
          subTitle={
            "If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course."
          }
          question={"How we help you"}
          description={
            " Our support team is available to help you throughout the process and provide feedback on test videos."
          }
          imgSrc={
            "/imgs/pngtree-flat-wind-business-group-in-discussion-png-image_7088799.png"
          }
        />
      </Tabs.Content>
      <Tabs.Content value="tab-3" >
        <TechNavigationContent
          title={
            "Gather your first ratings and reviews by promoting your course through social media and your professional networks."
          }
          subTitle={
            "Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment."
          }
          question={"How we help you"}
          description={
            "Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business."
          }
          imgSrc={
            "/imgs/pngtree-people-working-in-a-table-meeting-and-the-co-working-shared-png-image_7537097.png"
          }
        />
      </Tabs.Content>
    </Tabs.Root>
  );
};
