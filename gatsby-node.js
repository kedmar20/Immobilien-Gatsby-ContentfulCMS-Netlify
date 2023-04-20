const path = require('path');
const slugify = require('slugify');

exports.onPostBuild = ({ reporter }) => {
    reporter.info('Your Gatsby site has been built!');
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const oneProdukt = path.resolve('src/templates/OneProduct/OneProdukt.js');
    const result = await graphql(`
    query {
      allContentfulImmoEinAngebot {
        nodes {
          id
          address
        }
      }
    }
  `);
    result.data.allContentfulImmoEinAngebot.nodes.forEach((node) => {
        const slug = `/immobilien/${slugify(node.address.toLowerCase())}`;
        createPage({
            path: slug,
            component: oneProdukt,
            context: {
                id: node.id,
            },
        });
    });
};