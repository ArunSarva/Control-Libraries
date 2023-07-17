import React from "react";

// interface subcategoriesProps {
//   name: string;
//   description: string;
//   website: string;
//   icon: string;
//   used_by: number;
// }
// interface technologiesProps {
//   type: string;
//   subcategories: subcategoriesProps[];
// }
function GridControler(technologies: any) {
  const localData = [
    {
      type: "CMS",
      subcategories: [
        {
          name: "Squarespace",
          description:
            "Squarespace provides Software-as-a-Service (SaaS) for website building and hosting, and allows users to use pre-built website templates.",
          website: "http://www.squarespace.com",
          icon: "https://www.wappalyzer.com/images/icons/Squarespace.png",
          used_by: 550865,
        },
      ],
    },

    {
      type: "Ecommerce",
      subcategories: [
        {
          name: "Squarespace Commerce",
          description:
            "Squarespace Commerce is an ecommerce platform designed to facilitate the creation of websites and online stores, with domain registration and web hosting included.",
          website: "https://www.squarespace.com/ecommerce-website",
          icon: "https://www.wappalyzer.com/images/icons/Squarespace.png",
          used_by: 135587,
        },
      ],
    },
    {
      type: "Reverse proxies",
      subcategories: [
        {
          name: "Nginx",
          description:
            "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
          website: "http://nginx.org/en",
          icon: "https://www.wappalyzer.com/images/icons/Nginx.svg",
          used_by: 544934,
        },
      ],
    },
    {
      type: "Web servers",
      subcategories: [
        {
          name: "Nginx",
          description:
            "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
          website: "http://nginx.org/en",
          icon: "https://www.wappalyzer.com/images/icons/Nginx.svg",
          used_by: 544934,
        },
      ],
    },
    {
      type: "Analytics",
      subcategories: [
        {
          name: "Google Analytics",
          description:
            "Google Analytics is a free web analytics service that tracks and reports website traffic.",
          website: "http://google.com/analytics",
          icon: "https://www.wappalyzer.com/images/icons/Google%20Analytics.svg",
          used_by: 1096566,
        },
      ],
    },
    {
      type: "JavaScript libraries",
      subcategories: [
        {
          name: "Moment.js",
          description:
            "Moment.js is a free and open-source JavaScript library that removes the need to use the native JavaScript Date object directly.",
          website: "https://momentjs.com",
          icon: "https://www.wappalyzer.com/images/icons/Moment.js.svg",
          used_by: 628495,
        },
      ],
    },
    {
      type: "Font scripts",
      subcategories: [
        {
          name: "Typekit",
          description:
            "Typekit is an online service which offers a subscription library of fonts.",
          website: "http://typekit.com",
          icon: "https://www.wappalyzer.com/images/icons/Typekit.png",
          used_by: 27074,
        },
      ],
    },
  ];
  let data = technologies.length === undefined? localData : technologies;
  return (
    <>
      <div className="p-10 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {
           data.map(
            (
              item: {
                subcategories: any[];
                type:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: number
            ) => {
              return (
                <div className="border p-5 rounded-sm" key={index}>
                  {item.subcategories.map(
                    (
                      item: {
                        icon: string | undefined;
                        name:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                        description:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                        used_by:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                      },
                      index
                    ) => {
                      return (
                        <div key={index}>
                          <div className="flex">
                            <div className="p-2 w-12 h-12 border rounded">
                              <img src={item.icon} alt="" className="" />
                            </div>
                          </div>
                          <div className="text-lg font-semibold mt-2">
                            {item.name}
                          </div>
                          <div className="text-sm mt-2">{item.description}</div>
                          <div className="text-sm mt-2 font-semibold">
                            Used by: {item.used_by}
                          </div>
                        </div>
                      );
                    }
                  )}
                  <div className="mt-4 flex">
                    <div
                      className={`text-xs px-5 py-1 rounded-sm ${
                        index % 2 === 0 ? "bg-blue-200" : "bg-purple-200"
                      }`}>
                      {item.type}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default GridControler;
