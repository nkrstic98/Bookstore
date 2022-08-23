type User = {
    firstname: string;
    lastname: string;
    email: string;
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
        password: "nikola.krstic",
        phone: "063348946",
        address: "Mihajla Petrovica Alasa 9/7 Pancevo",
        type: "admin",
    },
    {
        firstname: "Katarina",
        lastname: "Krstic",
        email: "katarina.krstic@gmail.com",
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

    return { userLogin }
}

export {userModel};
export type { User };
