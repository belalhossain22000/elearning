import { useParams } from "react-router-dom"
import { useGetUserByEmailQuery } from "../../redux/api/usersApi"
import Loading from "../../components/Loading/Loading"


const StudentDetails = () => {
    const { email } = useParams()
    const { data: user } = useGetUserByEmailQuery(email)
    if (!user) {
        return <Loading />
    }
   
    return (
        <div>StudentDetails</div>
    )
}

export default StudentDetails