import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "group flex justify-center items-center cursor-pointer rounded-full px-[1.15rem] py-[0.4rem] font-semibold outline-none transition-all duration-medium gap-2 splash",
  {
    variants: {
      variant: {
        primary: "bg-black text-white",
        secondary: "text-black bg-white border border-black/20 after:bg-black/[0.15]"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

const Button = ({ variant = "primary", children, loading, className, ...props }) => {
  return (
    <button
      className={twMerge(
        buttonVariants({ variant }),
        className,
        loading || props.disabled ? "opacity-80 pointer-events-none" : ""
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading !== undefined && (
        <div
          className={`${
            loading ? "opacity-100 ml-0" : "opacity-0 pointer-events-none -mr-7"
          } transition-all duration-150`}
        >
          <RotatingLines
            height="20"
            width="20"
            color="#fff"
            strokeColor="white"
            ariaLabel="button-loading"
            visible={true}
          />
        </div>
      )}
      {children}
    </button>
  );
};

const ButtonWrapper = ({ to, wrapperClassName, target = "_self", ariaLabel, ...props }) => {
  if (to) {
    return (
      <Link to={to} target={target} className={wrapperClassName} aria-label={ariaLabel}>
        <Button {...props} />
      </Link>
    );
  }
  return <Button {...props} />;
};

export default ButtonWrapper;
