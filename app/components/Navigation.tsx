import { Tabs } from "@chakra-ui/react";
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu";
import SectionOne from "../allCoursesPage/page";
import ListsPage from "../myListPage/page";
import EnrolledCourses from "../enrolledPage/page";
import Favorites from "../favouritesPage/page";
import LearningTools from "../learningTools/page";

export const Demo = () => {
  return (
    <Tabs.Root defaultValue="members" variant="line">
      <Tabs.List
        bg="white"
        rounded="lg"
        p="4" 
        m="4" 
        boxShadow="md" 
        display="flex" 
        justifyContent="space-between" 
      >
        <Tabs.Trigger
          value="members"
          _selected={{
            color: "white", 
            bg: "purple.600", 
            borderColor: "purple.600", 
          }}
          _focus={{
            boxShadow: "none", 
          }}
          px="4" 
          py="2" 
          borderRadius="md" 
        >
          <LuUser />
          All Courses
        </Tabs.Trigger>

        <Tabs.Trigger
          value="projects"
          _selected={{
            color: "white",
            bg: "purple.600",
            borderColor: "purple.600",
          }}
          _focus={{
            boxShadow: "none",
          }}
          px="4"
          py="2"
          borderRadius="md"
        >
          <LuFolder />
          My List
        </Tabs.Trigger>

        <Tabs.Trigger
          value="tasks"
          _selected={{
            color: "white",
            bg: "purple.600",
            borderColor: "purple.600",
          }}
          _focus={{
            boxShadow: "none",
          }}
          px="4"
          py="2"
          borderRadius="md"
        >
          <LuCheckSquare />
          Enrolled
        </Tabs.Trigger>
        <Tabs.Trigger
          value="Fav"
          _selected={{
            color: "white",
            bg: "purple.600",
            borderColor: "purple.600",
          }}
          _focus={{
            boxShadow: "none",
          }}
          px="4"
          py="2"
          borderRadius="md"
        >
          <LuCheckSquare />
          Favorites
        </Tabs.Trigger>

        <Tabs.Trigger
          value="Tools"
          _selected={{
            color: "white",
            bg: "purple.600",
            borderColor: "purple.600",
          }}
          _focus={{
            boxShadow: "none",
          }}
          px="4"
          py="2"
          borderRadius="md"
        >
          <LuCheckSquare />
          My Tools
        </Tabs.Trigger>

        <Tabs.Indicator rounded="md" bg="purple.600" />
      </Tabs.List>

      <Tabs.Content value="members">
        <SectionOne />
      </Tabs.Content>
      <Tabs.Content value="projects">
        <ListsPage />
      </Tabs.Content>
      <Tabs.Content value="tasks">
        <EnrolledCourses />
      </Tabs.Content>
      <Tabs.Content value="Fav">
        <Favorites />
      </Tabs.Content>
      <Tabs.Content value="Tools">
        <LearningTools />
      </Tabs.Content>
    </Tabs.Root>
  );
};
