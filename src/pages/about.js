// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

// Step 3: Add Title for the about page
export const Head = () => <title>About Me</title>;

// Step 4: Export your component
export default AboutPage;
