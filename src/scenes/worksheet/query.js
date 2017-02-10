import gql from 'graphql-tag'

const QueryWorksheets = gql`
  query Worksheets {
    worksheets {
      id
      action
      created_at
    }
  }
`

export default QueryWorksheets
