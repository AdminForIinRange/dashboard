import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {

  const regex = new RegExp(q, "i") // the "i" makes the search case insensitive (make it lowercase no matter what)
  try {
    connectToDB();

    const users = await User.find({username: {$regex: regex}});
    return users;
  } catch (err) {
    console.log(err);
    throw new Error(Error);
  }
};
