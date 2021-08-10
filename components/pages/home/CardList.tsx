import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import type { IconProps as IP } from "@chakra-ui/react";

type Service = { title: string };

export interface CLProps {
  data: Service[];
}

const icons = [
  dynamic<IP>(() => import("../../common/icons/PuzzleIcon").then((mod) => mod.PuzzleIcon)),
  dynamic<IP>(() => import("../../common/icons/ElectricIcon").then((mod) => mod.ElectricIcon)),
  dynamic<IP>(() => import("../../common/icons/ToolboxIcon").then((mod) => mod.ToolboxIcon)),
  dynamic<IP>(() => import("../../common/icons/RollerbrushIcon").then((mod) => mod.Rollerbrush)),
  dynamic<IP>(() => import("../../common/icons/HomeRepairIcon").then((mod) => mod.HomeRepairIcon)),
];

const Card = ({ data, IconComponent }: { data: Service; IconComponent: React.ReactElement }) => {
  const [hoverActive, setHoverActive] = useState(false);

  return (
    <Flex
      flexDir="column"
      flexGrow={1}
      justify="center"
      align="center"
      bgColor={hoverActive ? "pAqua" : "whiteAlpha.900"}
      borderWidth={hoverActive ? "1px" : undefined}
      borderColor="pAqua"
      borderRadius={8}
      m="0 10px 20px 10px"
      minW="210px"
      h={["160px", null, null, "190px"]}
      w={["calc((100% / 2) - 20px)", null, null, "calc((100% / 5) - 20px)"]}
      transition="all 0.3s ease-in"
      onMouseEnter={() => setHoverActive(true)}
      onMouseLeave={() => setHoverActive(false)}
    >
      <Flex justify="center" w="100%">
        {React.cloneElement(IconComponent, { color: hoverActive ? "whiteAlpha.900" : "pAqua" })}
      </Flex>
      <Text
        p={2}
        position="relative"
        w="100%"
        textAlign="center"
        fontWeight={500}
        fontSize={[16, null, null, 18]}
        letterSpacing={-1}
        color={hoverActive ? "whiteAlpha.900" : "#121212"}
        userSelect="none"
      >
        {data.title}
      </Text>
    </Flex>
  );
};

export const CardList = ({ data }: CLProps) => {
  return (
    <Flex w={["95%", null, null, "80%"]} flexWrap="wrap" margin="-10px">
      {data.map((data, idx) => {
        const Comp = icons[idx];
        return <Card key={idx} data={data} IconComponent={<Comp boxSize={14} color="pAqua" />} />;
      })}
    </Flex>
  );
};
