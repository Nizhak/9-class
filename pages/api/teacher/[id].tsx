import config from "../../../config.json"

export default function handler(req, res) {
    const id:number = req.query.id - 1;
    const data = config.teacher[id]
    if (!data) {
        return res.status(404).json({
            error: "notFound"
        })
    }
    res.status(200).json(config.teacher[req.query.id - 1])
}