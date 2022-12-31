import config from "../../../config.json"

export default function handler(req, res) {
    res.status(200).json(config.students)
}