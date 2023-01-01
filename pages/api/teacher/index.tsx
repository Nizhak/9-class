import config from "../../../config.json"

export default function handler(req, res) {
    if (!config.teacher) {
        return res.status(404).json({
            error: "notFound"
        })
    }
    res.status(200).json(config.teacher)
}