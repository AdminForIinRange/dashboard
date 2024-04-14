# Accreting my Next.js journey

Trying to understand the project, because I do not 100% get what he's trying to do, so I have to fill in the gaps and keep note on what he does.

### Recommended folder structure from Docs's "Apparently" That means everything he's doing is 100% by the book and I should follow this file structure, but he also taught me the file structure in his previous 5-hour project and it was different, and it didn't contain UI nor did we have to import global CSS from UI.

## Hates about this Tut

- He create to much files outright. making teh dir messy right of the bat.

## Odd File setup

![File Structure](image.png)

- Creating a comp file and within that file creating a layout is odd, but let's see what he does.
- I have never heard of a file being named UI and being placed in the app route as if it were a page, but it's not; it holds another dashboard file and navbar, I think it's because of how the overall dashboard file is set up.

## Naming convention

- Naming convention is weird, but I think it's great. In my last project, I had a weird error when deploying in Vercel because of some weird naming trace issue, I think so I renamed my /Hero/Hero.js to /Hero/HeroPage.jsx.

## Must be Page.jsx

If it's not page.js then the code will not work.
However, the const export can be anything but it needs a capital word, common convention states Filename with a Capital Word + "page" in the end.

## Taking {{children}} without Wrapping

If you have a file structure where both the page and layout components reside in the same folder, and the layout component is designed to wrap its children, any page component imported and rendered within that layout component will automatically become a child of the layout.

## CSS conventions

```js
//  when naming teh file moduile, it spetres it form the css and you can name things like contrainer in serveal css modules without it conflicting.

import styles from "./sidebar.module.css"; // here a the import dir and name

<div className={styles.container}>Sidebar</div>; // indavuialy impiorting the style as if it were a basic var import
```

## CSS naming conventions

its allways, name of file . "module" . css

## UI folder in App Router replaces the Components folder convention

The UI folder, as you described it, seems to serve as a container for all the UI elements, similar to a component folder in basic React setups. It's a common practice to organize UI-related components and styles separately from other parts of the application for better modularity and maintainability. This separation helps in managing and scaling the application as it grows, making it easier to locate and update UI elements independently.

## Maping Over ObjArry For Links

cool use of array obj, but i alredy know this

````js const menuItems = [
       {
         title: "Pages",
         list: [
           {
             title: "Dashboard",
             path: "/dashboard",
             icon: <MdDashboard />,
           },
           {
             title: "Users",
             path: "/dashboard/users",
             icon: <MdSupervisedUserCircle />,
           }, ...


          // Double Maping of MenuItems and i destructured it to make it more readable

 return (
   <div className={styles.container}>
     {menuItems.map(({ title, list }) => (
       <li key={title}>
         <span className={styles.cat} >{title}</span>
         {list.map(({ title, path, icon}) => (
           <MenuLink key={title} title={title}  path={path} item={item} icon={icon}  />
         ))}
       </li>

     ))}
   </div>
 );
};

//  MenuLink is taking all teh props

const MenuLink = ({ title, path, icon}) => {


```
````

## Simple Path Name Access

```js
import { usePathname } from "next/navigation"; // next import

const pathname = usePathname(); //  require "use Client"

console.log(pathname); // basically, i am able to access the path name ( the url ).

//  Log result dashboard/products

<div className={styles.container}>{pathname.split("/").pop}</div>;
// retuns only the "products" from  dashboard/products
```

## Active Classname link

```js

 <Link className={` ${styles.container} ${pathname === path && "active"}`} href={path}>


```


## Charts

i have laready delt with recharts, because i have used it preveionly in trastcion project, with responsive and dyanimciu data not hard coded like prested in this project 


