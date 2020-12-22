import { data } from "../../../../data";

const handlePosts = (req, res) => {
	res.status(200).json(data);
};

export default handlePosts;
