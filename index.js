require('dotenv').config();
const express = require('express');

const app = express();
// const PORT = 3045;

const user_details = {
  "login": "heyRahull",
  "id": 62810879,
  "node_id": "MDQ6VXNlcjYyODEwODc5",
  "avatar_url": "https://avatars.githubusercontent.com/u/62810879?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/heyRahull",
  "html_url": "https://github.com/heyRahull",
  "followers_url": "https://api.github.com/users/heyRahull/followers",
  "following_url": "https://api.github.com/users/heyRahull/following{/other_user}",
  "gists_url": "https://api.github.com/users/heyRahull/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/heyRahull/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/heyRahull/subscriptions",
  "organizations_url": "https://api.github.com/users/heyRahull/orgs",
  "repos_url": "https://api.github.com/users/heyRahull/repos",
  "events_url": "https://api.github.com/users/heyRahull/events{/privacy}",
  "received_events_url": "https://api.github.com/users/heyRahull/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rahul Agarwal",
  "company": null,
  "blog": "",
  "location": "Mount abu",
  "email": null,
  "hireable": null,
  "bio": "Software Engineer",
  "twitter_username": null,
  "public_repos": 73,
  "public_gists": 0,
  "followers": 15,
  "following": 0,
  "created_at": "2020-03-28T18:42:19Z",
  "updated_at": "2026-06-11T14:31:03Z"
}

app.get('/',(req,res)=>{
    res.send('This is Home Page');
})

app.get('/about',(req,res)=>{
    res.send('This is About Page');
})

app.get('/contact',(req,res)=>{
    res.send('<h1>This is Contact Page</h1>');
})

app.get('/user',(req,res)=> {
    res.json(user_details);
})

app.listen(process.env.PORT,()=>{console.log(`server is running on port : ${process.env.PORT}`)})