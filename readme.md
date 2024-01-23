## Sample app fo Polyteia

#### This is sample application built with NestJS, NExtJS, GraphQL and Nivo library.
#### It uses sample data from MongoDB - it's originaly data from Untappd API - represents actual beer menu on taps in one of bars.

There is a simple GUI with 2 options: 
* by clicking `Fetch New Data` you run query to graphQL and get new portion of data.
* by toggling switch you can change graphical presentation from bar chart to pie chart. Data on charts is beer names with some random number. 

<img src="gui.png" width=500>

---

## Installation

1. Clone the repo.
2. Go to repo folder.
3. Go to `/server` folder.
4. Run `npm i`.
5. Create `.env` file.
6. Add value to `.env`.

  ```
  MONGO_CONNECTION_STRING=mongodb+srv://polyteia:polyteia@mbottest.z04wi.gcp.mongodb.net/?retryWrites=true&w=majority
  ```

  This will connect backend to tes MongoDB. Test user has read-only privileges.

7. Run `npm run start:dev`. This will start nest.js backend on [http://localhost:3000](http://localhost:3000).

Apollo GUI is on [http://localhost:3000/graphql](http://localhost:3000/graphql)

8. Go to `/client` folder.
9. Run `npm i`.
10. Run `npm run dev`.
11. Open [http://localhost:3001](http://localhost:3001) in your browser.

---

#### Mikhail Rashkovskiy 2024