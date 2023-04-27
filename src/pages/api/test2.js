
export default async (req, res) => {
    try {
        res.status(200).json({ msg: 'res from test2' })
    } catch (err) {
        res.status(500)
    }
}