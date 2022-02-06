import { Card, Col, Row } from "antd";
import React, { useState } from "react";

import { NakedButtonLink } from "../button/Buttons";
import { SecondaryButton } from "../button/Buttons";

export const ProjectCard = (props) => {
  const { Meta } = Card;
  const [toggler, setToggler] = useState(false);
  const locationRedirect = (href) => {
    return (window.location.href = href);
  };
  return (
    <div
      onMouseEnter={() => setToggler(true)}
      onMouseLeave={() => setToggler(false)}
      style={{
        border: "1px solid #d3d3d3",
        cursor: "pointer",
        margin: "auto",
        boxShadow: "6px 6px 2px 1px rgb(0 0 0 / 4%)",
        backgroundColor: "#f4f4f4",
        margin: "0px",
      }}
    >
      <Card
        hoverable
        style={{
          width: "100%",
          margin: "auto",
          height: "390px",
          border: toggler ? "2px solid blue" : null,
        }}
        cover={
          <img
            alt={props.alt}
            src={props.img}
            style={{
              borderTop: toggler ? "2px solid blue" : null,
              borderLeft: toggler ? "2px solid blue" : null,
              borderRight: toggler ? "2px solid blue" : null,
              height: "200px",
            }}
          />
        }
        onClick={() => locationRedirect(props.href)}
      >
        <Meta
          title={props.title}
          description={props.description}
          // style={{ width: "95%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "18px",
          }}
        >
          {/* <button>
            <a href={props.source_code}>Source Code</a>
          </button> */}
          <SecondaryButton
            pulse={false}
            link={props.source_code}
            title="Source Code"
            float="left"
          />
          <NakedButtonLink link={props.href} title={"Live site"} />
        </div>
      </Card>
    </div>
  );
};

export const ProjectCardContainer = (props) => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {props.projects.map(
          ({ title, href, alt, img, description, source_code }, index) => (
            <Col span={8} style={{ marginTop: 16 }}>
              <ProjectCard
                key={index}
                title={title}
                href={href}
                source_code={source_code}
                alt={alt}
                img={img}
                description={description}
              />
            </Col>
          )
        )}
      </Row>
    </div>
  );
};
