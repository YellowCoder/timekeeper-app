import gql from 'graphql-tag'

const QueryWorksheets = gql`
  query Worksheets {
    worksheets {
      id
      action
    }
  }
`

export default QueryWorksheets
