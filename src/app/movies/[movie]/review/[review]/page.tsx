interface page{
    params: {movie:string, review:String}
}

function page({params}:page) {
    
  return (
    <div>Review number {params.review} of movie number {params.movie} </div>
  )
}

export default page