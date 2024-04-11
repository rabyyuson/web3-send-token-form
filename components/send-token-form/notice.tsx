import Information from "@/components/icons/information";

export default function Error({
    message,
}: {
    message: string;
}) {
    return (
        <div className="rounded-lg mt-5 justify-center items-center text-sm text-white p-5 bg-yellow-600 flex flex-row gap-2">
            <Information />
            {" "}
            {message}
        </div>
    );
}