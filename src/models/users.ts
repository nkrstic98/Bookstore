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

        return true;
    }

    return { userLogin, userRegister }
}

export {userModel};
export type { User };
