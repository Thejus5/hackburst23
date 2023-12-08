import { colors } from "../../core/colors";
import { TagWrapper } from "./tags.styles";

export default function Tag({
  label,
  color,
}: Readonly<{ label: string; color?: string }>) {
  const defaultColorMap: any = {
    locked: colors.yellow,
    open: colors.green,
  };

  const getBgColor = () => {
    if (Object.keys(defaultColorMap).includes(label.toLowerCase())) {
      return defaultColorMap[label.toLowerCase()];
    } else {
      return color || "#1c1c1c";
    }
  };

  return <TagWrapper bgColor={getBgColor()}>{label}</TagWrapper>;
}
