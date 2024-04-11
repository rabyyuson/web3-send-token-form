import XCircle from "@/components/icons/x-circle";
import Dismiss from "@/components/send-token-form/dismiss";

export default function Error({
  error,
  onDismissClick,
}: {
  error: string;
  onDismissClick: () => void;
}) {
  return (
    <div className="relative rounded-lg mt-5 justify-center items-center text-sm text-white p-5 bg-red-600 flex flex-row gap-2">
      <Dismiss onDismissClick={onDismissClick} />
      <XCircle width={20} height={20} />
      {" "}
      {error}
    </div>
  );
}