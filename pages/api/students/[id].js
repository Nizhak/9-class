import config from "../../../config.json"

export default function handler(req, res) {
    const data = config.students[req.query.id - 1]
    if (!data) {
        return res.status(404).json({
            error: "notFound"
        })
    }
    res.status(200).json(config.students[req.query.id - 1])
}