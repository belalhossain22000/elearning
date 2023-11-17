import Table from "./Table"

const Profile = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex gap-6 md:gap-10 items-center justify-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="data:image/jpeg;base64,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" />
                    </div>
                </div>
                <div className="flex items-start flex-col gap-3">
                    <h3 className="font-semibold text-3xl">Ajijul Islam</h3>
                    <p className="font-semibold text-lg">123456</p>
                </div>
            </div>
            <div className="mt-10">
                <h3 className="text-3xl font-semibold text-center">About</h3>
                <Table></Table>
            </div>
        </div>
    )
}

export default Profile