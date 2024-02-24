export default(dependencie:any)=>{
    const { productRepositories:{addproduct}}=dependencie
    const interactor = async(credentials:any)=>{
        return await addproduct(credentials)
    }
    return {interactor}
}