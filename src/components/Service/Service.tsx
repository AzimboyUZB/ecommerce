import React, { FC } from "react";

import { brand } from "@/data/brand";
import { Flex } from "../ui/Flex";
import { Container } from "../ui/Container";
import { services } from "@/data/service";
import ServicesList from "./ServicesList";

const Service: FC = (props) => {
  return (
    <Container>
      <Flex justify="space-between">
        {services.map(
          (item) => (
            <ServicesList key={item.id} service={item} />
          )
          // {
          //   return (
          //     <div className="item" key={item.id}>
          //       <span>{item.icon}</span>
          //     </div>
          //   )
          // }
        )}
      </Flex>
    </Container>
  );
};

export default Service;
