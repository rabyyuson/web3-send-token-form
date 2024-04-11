import CheckCircle from "@/components/icons/check-circle";

export default function Success({
    message,
    hash,
}: {
    message: string;
    hash: string | undefined;
}) {
    return (
        <div className="rounded-lg mt-5 justify-center items-center text-sm text-white p-5 bg-green-600 flex flex-row gap-2">
            <CheckCircle />
            {" "}
            {message}
            {" "}
            <div className="justify-left">
              View <a className="underline m-0 p-0" href={`https://testnet.snowscan.xyz/tx/${hash}`} target="_blank">transaction</a>.
            </div>
        </div>
    );
}