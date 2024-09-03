"use client";

import React, { useState } from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  /** Isi Project  */

  const renderContent = () => {
    return (
      <div className="mt-8 justify-center">
        {(() => {
          switch (currentPage) {
            case "home":
            default:
              return (
                <div className="p-10 border-5 border-gray-500 rounded-lg">
                  <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                      <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                      />
                      <div className="flex flex-col">
                        <p className="text-md">Mark O. Davis</p>
                        <p className="text-small text-default-500">
                          Photographer Portofolio
                        </p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <p>
                        Make beautiful websites regardless of your design
                        experience.
                      </p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <Link
                        isExternal
                        showAnchorIcon
                        href="https://kevinelyanporto1.framer.website/"
                      >
                        Mark O.Davis
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              );
            case "webdesign":
              return (
                <div className="p-10 border-5 border-gray-500 rounded-lg">
                  <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                      <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                      />
                      <div className="flex flex-col">
                        <p className="text-md">Mark O. Davis</p>
                        <p className="text-small text-default-500">
                          Photographer Portofolio
                        </p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <p>
                        Make beautiful websites regardless of your design
                        experience.
                      </p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <Link
                        isExternal
                        showAnchorIcon
                        href="https://kevinelyanporto1.framer.website/"
                      >
                        Mark O.Davis
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              );
            case "company":
              return (
                <div className="p-10 border-5 border-gray-500 rounded-lg">
                  <h1>Company Profile</h1>
                  <p>Professional company profile websites.</p>
                  <h1>Company Profile</h1>
                  <p>Professional company profile websites.</p>
                </div>
              );
            case "webapps":
              return (
                <div className="p-10 border-5 border-gray-500 rounded-lg">
                  <h1>Web Apps</h1>
                  <p>Innovative mobile application development.</p>
                </div>
              );
          }
        })()}
      </div>
    );
  };

  return (
    <>
      <Breadcrumbs
        size="lg"
        onAction={(key) => setCurrentPage(key)}
        classNames={{
          list: "gap-3",
        }}
        itemClasses={{
          item: [
            "px-4 py-0.5 border-small border-default-500 rounded-small",
            "data-[current=true]:border-foreground data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors",
            "data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100",
          ],
          separator: "hidden",
        }}
      >
        <BreadcrumbItem key="home" isCurrent={currentPage === "home"}>
          <Link href="#" onClick={() => setCurrentPage("home")}>
            All Projects
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem key="webdesign" isCurrent={currentPage === "webdesign"}>
          <Link href="#" onClick={() => setCurrentPage("webdesign")}>
            Framer Websites
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem key="company" isCurrent={currentPage === "company"}>
          <Link href="#" onClick={() => setCurrentPage("company")}>
            Company Profile
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem key="webapps" isCurrent={currentPage === "webapps"}>
          <Link href="#" onClick={() => setCurrentPage("webapps")}>
            Web Apps
          </Link>
        </BreadcrumbItem>
      </Breadcrumbs>

      <div>{renderContent()}</div>
    </>
  );
}
