import Information from "@/components/icons/information";
import Dismiss from "@/components/send-token-form/dismiss";

export default function Error({
  message,
  onDismissClick,
}: {
  message: string;
  onDismissClick: () => void;
}) {
  return (
    <div className="relative rounded-lg mt-5 justify-center items-center text-sm text-white p-5 bg-yellow-600 flex flex-row gap-2">
      <Dismiss onDismissClick={onDismissClick} />
      <Information />
      {" "}
      {message}
    </div>
  );
}