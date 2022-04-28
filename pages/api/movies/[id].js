import {MoviesService} from "../../services/MoviesService"

export default async function handler(req,res){
    const { id } = req.query
        const {data: data} = await MoviesService.getMoviesById(id)
        res.status(200).json({data});   
}