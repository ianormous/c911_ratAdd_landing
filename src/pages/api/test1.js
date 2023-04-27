
export default async (req, res) => {
    try {
        res.status(200).json({ msg: 'res from test1' })
    } catch (err) {
        res.status(500)
    }
}