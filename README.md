# odd-duck

cf20111-odd duck

November 6, 2023:

- Inital commit
- Copied John's HTML from demo to define structure
- Added all assets from Seattle Code Fellows repository
- Used John's JS file from demo as a guide to write apps.js code
- Used ChatGPT to write View Results feature
- Matched webpage design with wireframe example
- Used [Grid Layout tool](https://grid.layoutit.com/) to create grid format and code
- Validated with lab11 instructions for full project functionality
- [Lighthouse Score](lighthouse/lab11-lighthouse.PNG)
- Added transform property to reduce overall webpage size

November 7, 2023:

- Added bar chart that displays number of times an image was seen and number of times an images was clicked
- Could not figure out the algorithm to ensure the same image is not displayed on two subsequent iterations. I tried putting used pictures into a used pictures array, then after 2 clicks, restore those images back into the pictures array for future iterations

November 8, 2023:

- Worked with Chris A. to prevent two subsequent iterations from displaying. He shared his code with me and explained how to use the set function to store used pictures into a set then return the pictures so they are available for use again.
- Tried to implement code for local storage but could not figure it out. Need to revist class demo for proper steps and insights
