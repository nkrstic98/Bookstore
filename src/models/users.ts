type User = {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
    phone: string;
    address: string;
    type: string;
};

var userList: Array<User> = [
    {
        firstname: "Nikola",
        lastname: "Krstic",
        email: "nikola.krstic@gmail.com",
        username: "nikolak98",
        password: "nikola.krstic",
        phone: "063348946",
        address: "Mihajla Petrovica Alasa 9/7 Pancevo",
        type: "admin",
    },
    {
        firstname: "Katarina",
        lastname: "Krstic",
        email: "katarina.krstic@gmail.com",
        username: "kacak04",
        password: "katarina.krstic",
        phone: "0648674945",
        address: "Mihajla Petrovica Alasa 9/7 Pancevo",
        type: "customer",
    },
]

const userModel = () => {
    const userLogin = (email: string, password: string) => {
        for (const user of userList) {
            if (email == user.email && password == user.password) {
                return user;
            }
        }

        return null;
    }

    const userRegister = (user: User) => {
        for (let userElem of userList) {
            if(userElem.email == user.email || userElem.username == user.username) {
                return false;
            }
        }

        userList.push(user);

        console.log(userList);

        return true;
    }

    const userUpdate = (email: string, firstname: string, lastname: string, address: string, phone: string, password: string) => {
        for (let i = 0; i <userList.length; i++) {
            if(userList[i].email == email) {
                userList[i].firstname = firstname;
                userList[i].lastname = lastname;
                userList[i].address = address;
                userList[i].phone = phone;
                userList[i].password = password;

                return userList[i];
            }
        }

        return null;
    }

    const userDelete = (email: string) => {
        console.log(userList);
        userList = userList.filter(user => user.email != email);
        console.log(userList);
    }

    return { userLogin, userRegister, userUpdate, userDelete }
}

export {userModel};
export type { User };
