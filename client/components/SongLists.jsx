import { graphql } from "graphql"

const SongList = () => { 
    return (
        <h1>song lists</h1>
    )
}

const query = gql`
    {
        songs {
            title
        }
    }
`

export default graphql(query)(SongList)