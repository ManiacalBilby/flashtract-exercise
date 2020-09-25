# GitHub Searcher

### Process

- I began the assigment by carefully reading over the instructions.
- I then created a new project using create-react-app and adding axios and typescript as additional dependencies.
- My main focus was on getting the request logic working correctly using minimal styling as I went.
- After completing the request logic and displaying the requested information I styled the elements.
- I then separated the cards that I built for each search type into their own components.

### Challenges

- I ran into an issue with stale state in the function that was making the request. I solved this issue by using the useRef hook to keep this information current in all areas it was needed.
- Having used Bootstrap and MaterialUI on most of my work styling required a little more effort than I had anticipated.
- I initially included typescript in the project with plans to use it as recommended. I was not able to dedicate the time to using it correctly and used ts-ignore overrides to bypass any rules that were causing the code to not compile.

### Conclusion

I enjoyed working on this assignment and getting to dig into the GitHub API a bit. Areas that could use improvement would be overall styling including implementing CSS Grid for the results to have a little more control over the layout, adding icons in place of some of the card titles, and working through some of the other suggestions. Thank you for allowing me to participate in this portion of the interview process and I welcome any questions/critiques regarding my work.
