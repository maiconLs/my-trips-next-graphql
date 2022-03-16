import { gql } from 'graphql-request'

export const GET_PAGES = gql`
query pages(first: $first){
  id
  heading
  slug
  body{
    html
  }
}
}
`
