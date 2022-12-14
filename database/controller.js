/** Controller */
import Users from '../model/user'
// export async function getUsers(req, res) {
//     try {
//         const users = await Users.find({})
//         if (!users) return res.status(404).json({ error: "Data not Found" })
//         res.status(200).json(users)
//     } catch (error) {
//         res.status(404).json({ error: "Error While Fetching the Data" })
//     }
// }
// get : http://localhost:3000/api/users
export async function getUsers(req, res) {
    try {
        const users = await Users.find({})

        if (!users) return res.status(404).json({ error: "Data not Found" })
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching Data" })
    }
}
// get : http://localhost:3000/api/users/1
export async function getUser(req, res) {
    try {
        const { userId } = req.query;
        if (userId) {
            const user = await Users.findById(userId);
            return res.status(200).json({ user })
        }
        res.status(404).json({ error: " User not found" })
    } catch (error) {
        res.status(404).json({ error: "Error While Fetching user" })
    }
}
// post : http://localhost:3000/api/users
export async function postUser(req, res) {
    try {

        const formData = req.body;
        console.log(`${formData} this is working`)
        if (!formData) return res.status(404).json({ error: "Form Data Not Provided...!" });
        Users.create(formData, function (err, data) {
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({ error })
    }
}
export async function putUser(req, res) {
    try {
        const { userId } = req.query;
        const formData = req.body;

        if (userId && formData) {
            const user = await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(user)
        }
        res.status(404).json({ error: " User Not Selected or found" })
    } catch (error) {
        res.status(404).json({ error: "Error while Updating the data" })
    }
}
export async function deleteUser(req, res) {
    try {
        const { userId } = req.query;
        if (userId) {
            const user = await Users.findByIdAndDelete(userId)
            return res.status(200).json(user)
        }
        res.status(404).json({ error: " User Not selected" })

    } catch (error) {
        res.status(404).json({ error: "Error while deleting the data" })
    }
}