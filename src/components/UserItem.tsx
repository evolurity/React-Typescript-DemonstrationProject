import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
    clickHandler: (id: number) => void
}

const UserItem: FC<UserItemProps> = ({user, clickHandler}) => {
    return (
        <div
            onClick={() => clickHandler(user.id)}
            style={{padding: 15, border: '1px solid gray', cursor: 'pointer'}}>
            {user.id}. {user.name} live in city {user.address.city} on the street {user.address.street}
        </div>
    );
};

export default UserItem;