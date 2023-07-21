interface page{
    params: {movie:string}
}

function page({params}:page) {
    
  return (
    <div>movie number {params.movie} </div>
  )
}

export default page