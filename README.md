# homer-api
GraphQL API demo

Pretty simple - From terminal, install dependencies `Term> npm i`

Create `.env` file at project root with your Postgres info

```
LAB_PG_HOST=localhost
LAB_PG_DB=homerlabmb
LAB_PG_WRITER=homerlabadmin
LAB_PG_PASS=tehadmin
LAB_PG_PORT=5432
```

Then start the server: `Term> npm start`

Navigate to URL displayed in web browser - You should now be able to run GraphQL commands...

For example:

Query:
```
{
  story (privacy:true, likes:10) {
    title
  }
}
```

Add record:
```
mutation {
  addStory (title: "Homer Sample Title", privacy: true, likes: 55) {
    id
  }
}
```
