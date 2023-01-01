import config from "../../../config.json"

export default function handler(req, res) {
    if (!config.students) {
        return res.status(404).json({
            error: "notFound"
        })
    }
    res.status(200).json(config.students)
}