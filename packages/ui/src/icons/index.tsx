import CalendarSvg    from "./images/calendar.svg";
import PhoneSvg       from "./images/call.svg";
import DentistrySvg   from "./images/dentistry.svg";
import ArrowRightSvg  from "./images/arrow-right.svg";
import ChevronDownSvg from "./images/chevron-down.svg";
import StarSvg        from "./images/star.svg";
import InstagramSvg   from "./images/instagram.svg";
import TwitterSvg     from "./images/twitter.svg";
import DiscordSvg     from "./images/discord.svg";
import type { SVGProps } from "react";

export type IconName =
  | "calendar"
  | "phone"
  | "dentistry"
  | "arrow-right"
  | "chevron-down"
  | "star"
  | "instagram"
  | "twitter"
  | "discord";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function Icon({ name, size = 16, ...props }: IconProps) {
  const shared = { width: size, height: size };

  switch (name) {
    case "calendar":     return <CalendarSvg    {...shared} {...props} />;
    case "phone":        return <PhoneSvg       {...shared} {...props} />;
    case "dentistry":    return <DentistrySvg   {...shared} {...props} />;
    case "arrow-right":  return <ArrowRightSvg  {...shared} {...props} />;
    case "chevron-down": return <ChevronDownSvg {...shared} {...props} />;
    case "star":         return <StarSvg        {...shared} {...props} />;
    case "instagram":    return <InstagramSvg   {...shared} {...props} />;
    case "twitter":      return <TwitterSvg     {...shared} {...props} />;
    case "discord":      return <DiscordSvg     {...shared} {...props} />;
  }
}