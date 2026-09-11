import React from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import users from "../../../data/users";
import OpenInPage from "./OpenInPage";
import UserCard from "./UserCard";

const LastUsers = () => {
  return (
    <div className="col-span-2 max-h-max">
      <SectionTitle title={"آخرین کاربران"} />
      <div>
        {users.slice(-5).map((user) => (
          <UserCard key={user.id} {...user} />
        ))}

        <OpenInPage itemsLength={users.length} navigateTo={"/users"} />
      </div>
    </div>
  );
};

export default LastUsers;
