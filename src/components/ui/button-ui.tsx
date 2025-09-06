"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative z-0 overflow-hidden flex items-center justify-center rounded-full transition duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-black",
  {
    variants: {
      variant: {
        default: "bg-white/20 hover:scale-105 hover:bg-white/30",
        outline: "bg-transparent border-2 border-black hover:scale-105 hover:bg-white/10",
        ghost: "bg-transparent border-2 border-transparent hover:scale-105 hover:bg-white/10 hover:border-black",
        destructive: "bg-red-500/20 hover:scale-105 hover:bg-red-500/30 border-red-800",
        link: "bg-transparent border-2 border-transparent underline-offset-4 hover:underline"
      },
      size: {
        sm: "p-0.5",
        md: "p-0.5",
        lg: "p-0.5",
        icon: "p-0.5 w-10 h-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

const innerButtonVariants = cva(
  "rounded-full backdrop-blur transition-all duration-300 text-center tracking-wide font-inter antialiased",
  {
    variants: {
      variant: {
        default: "bg-white/90 text-black font-bold shadow-sm",
        outline: "bg-transparent text-black font-semibold",
        ghost: "bg-transparent text-black font-medium",
        destructive: "bg-red-500/90 text-white font-semibold",
        link: "bg-transparent text-black font-medium"
      },
      size: {
        sm: "px-6 py-2 text-sm font-medium leading-tight",
        md: "px-8 py-3 text-sm font-semibold leading-tight",
        lg: "px-10 py-4 text-base font-bold leading-tight",
        icon: "w-8 h-8 p-0 text-sm font-medium"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

interface ButtonUIProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const ButtonUI = React.forwardRef<HTMLButtonElement, ButtonUIProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <>
        <style>{`
          @keyframes rotate {
            100% {
              transform: rotate(1turn);
            }
          }
          
          .rainbow::before {
            content: '';
            position: absolute;
            z-index: -2;
            left: -50%;
            top: -50%;
            width: 200%;
            height: 200%;
            background-position: 100% 50%;
            background-repeat: no-repeat;
            background-size: 50% 30%;
            filter: blur(6px);
            background-image: linear-gradient(45deg, var(--primary), var(--primary-foreground), var(--accent));
            animation: rotate 4s linear infinite;
          }
        `}</style>
        <div className={cn(buttonVariants({ variant, size }), "rainbow", className)}>
          <button
            className={cn(innerButtonVariants({ variant, size }))}
            ref={ref}
            {...props}
          >
            {children}
          </button>
        </div>
      </>
    );
  }
);

ButtonUI.displayName = "ButtonUI";

export { ButtonUI, buttonVariants };
export type { ButtonUIProps };