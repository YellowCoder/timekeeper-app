import gql from 'graphql-tag'

const QueryWorksheets = gql`
  query Worksheets {
    worksheets {
      id
    }
  }
`

export default QueryWorksheets
