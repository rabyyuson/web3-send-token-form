import XCircle from "@/components/icons/x-circle";

export default function Error({
    error,
}: {
    error: string;
}) {
    return (
        <div className="rounded-lg mt-5 justify-center items-center text-sm text-white p-5 bg-red-600 flex flex-row gap-2">
            <XCircle />
            {" "}
            {error}
        </div>
    );
}