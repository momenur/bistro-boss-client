
const SectionTitle = ({subTitle, title}) => {
    return (
        <div className="w-4/12 mx-auto mt-20 mb-12 text-center">
            <p className="mb-1 text-yellow-600">---{subTitle}---</p>
            <h3 className="py-4 text-3xl font-semibold uppercase border-y-4">{title}</h3>
        </div>
    );
};

export default SectionTitle;