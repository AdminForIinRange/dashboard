import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i"); // the "i" makes the search case insensitive (make it lowercase no matter what)

  const ITEM_PER_PAGE = 2; // this is how many items we want to show per page

  try {
    connectToDB();

    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE); // this is where the magic happens, we are using the skip and limit methods to paginate the results
    return users;
  } catch (err) {
    console.log(err);
    throw new Error(Error);
  }
};
