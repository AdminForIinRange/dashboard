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

## Enforcing: Any route page need to be a page.jsx even if its a children

even if teg url looks like /dashboard/products at teh end of tehy day, dashboard and products are named page.jsx but the export inside and the folder route name is dashboard or products, howvere the jsx file is called page.jsx as its a page for teh folder route, this is not common convetion this is objective, menaing teh page wont render if the jsx file name is not Page.jsx

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

## Folder Placement conventions

lib folder is inside of app, in the last video it wasnt, lib was outisde of app and it also had a componnets folder rather then a ui folder

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

## using and Naming Slugs

The square brackets around the folder name, e.g., [slug], tell Next.js that this is a dynamic route, and the content inside the brackets will be used as the route parameter. This allows you to create pages that can handle different URLs or "slugs" without having to define the routes manually. you can name the dynamic parameter inside the square brackets anything you want, such as [formId], [productSlug], [username], [slug] etc.

## Password Issue

every time you wnan use mongo create a new porject, thats not inveoled in yoru last project. when creating a a new project your please est a password, you password is NOT bhattaraianjesh123 !!!!!!!!!!!!

I made a big mistake by not creating and establishing a password, and I thought it would be the same as 'bhattaraianjesh123'.

## Fetcthing the data form Mongo collection's

```js

// data.js

import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    connectToDB();

    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error(Error);
  }
};


// UsersPage.jsx

import { fetchUsers } from "@/app/lib/data";

const UsersPage = async () => {
  // a chldiren element within dashbaord app route
  const users = await fetchUsers();
  console.log(users);


// the console log output


  {
    _id: new ObjectId('661c9261058876f71d5949c7'),
    username: 'ike',
    email: 'ike@email.com',
    password: '123456',
    img: 'https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isAdmin: false,
    isActive: true
  },
  {
    _id: new ObjectId('661c927c058876f71d5949c8'),
    username: 'whyomi',
    email: 'whyomi@email.com',
    password: '123456',
    img: 'https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isAdmin: false,
    isActive: true
  }
]


```

## Mapping Fetch directly

```js
const users = await fetchUsers();

// ...

{
  users.map((user) => {
    return (
      <tr key={user.id}>
        <td>
          <div className={styles.user}>
            <Image
              src={user.img || noAvater}
              alt=""
              width={40}
              height={40}
              className={styles.userImage}
            />
            {user.username}
          </div>
        </td>
      </tr>
    );
  });
}
```

## Search with usePathname, useSearchParams, useRouter

```js
// const SearchParams = useSearchParams();: Think of this as grabbing all the search parameters from the URL. Like if you were searching for something on Google, it would get all the words you typed in the search bar.

//const pathname = usePathname();: This one gets the part of the web address after the domain name. So if you're on a website like "example.com/search", it would just get the "/search" part.

//const { replace } = useRouter();: This line is like getting a special tool that helps you change the web address. With this tool, you can change the web address without making a new entry in your browser's history.

//const handleSearch = (e) => { ... }: This is like a plan for what to do when someone types something in a search box on your website.

//const parmas = new URLSearchParams(SearchParams);: This line makes a copy of all the search words you already typed in the search box.

//parmas.set("q", e.target.value);: This part updates the copy of the search words with whatever new thing you just typed in the search box.

//replace(`${pathname}?${parmas}`);: Finally, this line uses the special tool to change the web address. It puts the new search words you typed into the address bar without making a new history entry.

const Search = ({ placeholder }) => {
  const SearchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e) => {
    const parmas = new URLSearchParams(SearchParams);

    parmas.set("q", e.target.value); // q is common convention
    replace(`${pathname}?${parmas}`);
  };

  console.log(pathname);
  console.log(SearchParams);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};
```

## User Search

```js


// The URL query params are stored in the searchParams prop.
// The destructuring assignment ({searchParams}) is pulling the searchParams prop out of the props object that is automatically passed into the function.

// The query is stored in the "q" key of the searchParams object.
// The line below is checking if the "q" key exists in the searchParams object and if it does it assigns its value to the variable q. If it doesn't exist it just assigns an empty string to it.

// The await keyword is used to wait for the promise to resolve before continuing. It's like doing a callback, but easier to read.

// The fetchUsers function is importing a function from another file. It's basically like doing a function call, but instead of calling the function directly, you're calling a function that is defined in another file.

// The fetchUsers function is being called with one argument, q. The value of q is whatever was in the "q" key of the searchParams object. If the "q" key didn't exist then an empty string would be passed in instead.

// The users variable is being assigned the return value of the fetchUsers function. The fetchUsers function is returning a promise, so the variable users is getting assigned the resolved value of the promise (which is the array of users).

const UsersPage = async ({searchParams}) => {    // searchParams is a buitin propagateServerField, like prams

  const q = SearchParams?.q || ""

  const users = await fetchUsers(q);


```

## Regex

```js
// export const fetchUsers = async (q, "i") => { ... }: This line exports a function named fetchUsers. It takes two parameters: q (presumably a search query) and "i" (likely a flag for case-insensitive search). The function is declared as an asynchronous function, indicated by the async keyword, which means it can use await to handle promises.

// const regex = new RegExp(q, "i"): This line creates a regular expression object using the RegExp constructor. The q parameter is passed as the pattern to search for, and the "i" parameter is passed as the flags. In regular expressions, the "i" flag means the search will be case-insensitive.

import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i"); // the "i" makes the search case insensitive (make it lowercase no matter what)
  try {
    connectToDB();

    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (err) {
    console.log(err);
    throw new Error(Error);
  }
};
```

## Updated search

```js

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {

    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      e.target.value > 3 &&  params.set("q", e.target.value);

    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };

 return (

```

## CreatedAt

```js
// when fetching createdAt from mongoDB its impornet to apply toString()
<td>{user.createdAt?.toString().slice(4, 16)}</td>
```

## useDebouncedCallback from use-debounce - debounces the function

The debounce function is used to limit the rate at which a function can be called. It delays the invocation of the function until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.

So if you type something in the search box, the function will be called after 300ms, and not immediately. This is useful for search boxes, because you don't want to make a fetch request to the server every time the user types something. Instead, you want to wait for the user to stop typing for a brief moment, and then make the request.

```js
const handleSearch = useDebouncedCallback((e) => {
  //...
}, 300);
```



## SuperEasy way to transmit data to mongoDB

```js



"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "./utils";
import { User } from "./models";

export const addUser = async (formData)=>{

    const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData); // formData is transformed into an object

    try {
        connectToDB();
        const newUser = new User({
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive
            
        })

        await newUser.save();
    } catch (err) {
        console.log(err);
    }

    revalidatePath('/dashboard/users')// acts like a refresh 
    redirect('/dashboard/users')
}


```

## Simple way of grabing user id from mongodb

```js
export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};



```