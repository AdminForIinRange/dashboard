# Accreting my Next.js journey  

Tying to understand teh project, beaucse i do nto 100% get what hes trying to do so i have to fill in teh gaps nad keep note on what he dose 




## Odd File setup
![File Structure](image.png)
- crating a comp file and within that file creating, a layout is odd, but lets see what he dose.
- I have never heard of a fale being named UI and being place din the app routure as if it were a page, but its not it holds a nother dashboard file and navbar, i think its beue of how th overall dash baord file is set up,
-so i think this dashbaored file is teh acutal dashbord and teh other one is jeuict the route taht holds this page

## Naming convetion
 - naming conatvion is weird, but i think its great, in my last project i hasd a weird error when deploying in vercel beacuse of some weord naming trace issue i think so i reanmed my /Hero/Hero.js to /Hero/HeroPage.jsx

## Must be Page.jsx

if its nto page js then teh code will not work,
hower the const export has can be anything but it need sa capital word, common convetion state  Filename with a Capital Word + "page" in the end

## Taking {{chlidren}} without Wraping 
 If you have a file structure where both the page and layout components reside in the same folder, and the layout component is designed to wrap its children, any page component imported and rendered within that layout component will automatically become a child of the layout.