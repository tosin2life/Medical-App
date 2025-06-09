import { Button } from "@/components/ui/button";

export interface CustomButtonProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
}

export default function CustomButton({
  title,
  icon,
  className,
  href,
}: CustomButtonProps) {
  return href ? (
    <a href={href}>
      <Button variant="outline" size="lg" className={className}>
        {icon && <>{icon}&nbsp;</>}
        {title}
      </Button>
    </a>
  ) : (
    <Button variant="outline" size="lg" className={className}>
      {icon && <>{icon}&nbsp;</>}
      {title}
    </Button>
  );
}
