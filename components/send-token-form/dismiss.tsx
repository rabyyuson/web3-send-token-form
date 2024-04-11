import XCircle from "@/components/icons/x-circle";

export default function Dismiss({
  onDismissClick,
}: {
  onDismissClick: () => void;
}) {
  return (
    <div onClick={onDismissClick} className="absolute -top-3 -right-3 cursor-pointer">
      <XCircle width={30} height={30} />
    </div>
  );
}
