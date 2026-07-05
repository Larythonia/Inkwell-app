import clsx from "clsx";

export function Button ({
  children,
  variant = "primary",
  size = "sm",
  onClick ,
  disabled = false,
  type = "button",
  className = "",
}) {

  const variantClasses = {
    primary: "bg-brand-500 hover:bg-brand-600 text-black font-normal",

    secondary: "bg-brandr-100 border border-brandr-300 hover:bg-brandr-200 text-brandr-300 font-thin"
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }; 

  return(
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      // clsx merges class names and applies them conditionally (Week 7)
      className={clsx(
        // Base classes on every button regardless of variant
        "inline-flex items-center justify-center font-semibold rounded-lg",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // Dynamic classes driven by props
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {/* The children prop renders whatever is placed between the tags */}
      {children}
    </button>
  );
}