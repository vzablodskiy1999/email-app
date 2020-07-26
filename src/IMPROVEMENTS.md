UI changes
1) Apply a search field. In some cases for users that might be the most convenient way to find email.
2) Add an ability to pin "hot" emails. That will allow users to organize the most important emails and always see them at the top of the list.
3) In the production app we will get our emails from the backend, so all user's interactions should be confirmed with snackbars/loaders and other stuff.
4) Accessibility rules should be applied.

Code changes
1) I would better rewrite CSS code, it looks a little messy because some elements in HTML can have 3-4 classes. I would better apply a CSS grid for this case.
2) SCSS variables for colors should be moved in CSS variables. That will allow us to apply theming easily if required.
3) We should divide email-table and table logic in different components. That will allow us in future to create new tables with less effort.
4) We should move all text from html files to JSON and use it like constants. This approach will allow us to make a localization if it would be required.
5) I was using svg code instead of font because of font's bad accessibility. It would be better to create a custom icon component, that will make our code more clear and allow us to cache already used icons to upload any icon only once. 
