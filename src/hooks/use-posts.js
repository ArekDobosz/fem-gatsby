import { graphql, useStaticQuery } from 'gatsby';

export default function usePosts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            author
            title
            slug
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map((post) => {
    return {
      title: post.frontmatter.title,
      slug: post.frontmatter.slug,
      image: post.frontmatter.image,
      author: post.frontmatter.author,
      excerpt: post.excerpt,
    };
  });
}
