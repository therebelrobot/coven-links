import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Coven of the Woods`,
    siteUrl: `https://covenofthewoods.church`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion"],
  // plugins: ["gatsby-plugin-emotion", "gatsby-plugin-google-gtag"],
};

export default config;
