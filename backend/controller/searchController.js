import Blog from '../models/blogModel.js';


const searchBlogs = async (req, res) => {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.heading || "";
    let author = req.query.genre || "All";

    // const options = [
    //     'author',
    // ]
    
    // author === 'All' 
    //         ? ...options 



    const blogs = await Blog.find({ heading: { $regex: search, $options: "i" } })
     .skip(page * limit)

    const total = await Blog.countDocuments(
        { heading: { $regex: search, $options: "i" } }
    )

    res.status(200).json({
        total, 
        page: page + 1,
        limit,
        blogs,
    });

  

}

export {searchBlogs};