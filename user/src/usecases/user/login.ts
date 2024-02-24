export default (dependencies: any) => {
    const {userRepositories:{userloginrepo}} = dependencies;
    if (!userloginrepo) {
        throw new Error('Dependency is required for login!');
    }

    const interactor = async (email: string) => {
        return await userloginrepo(email)
    }

    return {interactor}
}