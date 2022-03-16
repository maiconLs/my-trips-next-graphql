import { gql } from 'graphql-request'

export const GET_PAGES = gql`
pages(first: $first){
  id
  heading
  slug
  body{
    html
  }
}
}
`
