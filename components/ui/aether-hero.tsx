"use client";

import React from "react";

export type AetherHeroProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  align?: "left" | "center" | "right";
  maxWidth?: number;
  textColor?: string;
  height?: string | number;
  className?: string;
};

export default function AetherHero({
  title = "Make the impossible feel inevitable.",
  subtitle = "A minimal hero for modern landing pages.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  secondaryCtaLabel,
  secondaryCtaHref,
  align = "center",
  maxWidth = 960,
  textColor = "#000",
  height = "100vh",
  className = "",
}: AetherHeroProps) {
  const justify =
    align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center";

  const textAlign =
    align === "left" ? "left" : align === "right" ? "right" : "center";

  return (
    <section
      className={className}
      style={{
        height,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: justify,
          padding: "min(6vw,64px)",
          color: textColor,
          fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth,
            marginInline: align === "center" ? "auto" : undefined,
            textAlign,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem,6vw,4.5rem)",
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{
                marginTop: "1rem",
                fontSize: "clamp(1rem,2vw,1.25rem)",
                lineHeight: 1.6,
                opacity: 0.9,
                maxWidth: 900,
                marginInline: align === "center" ? "auto" : undefined,
              }}
            >
              {subtitle}
            </p>
          )}

          {(ctaLabel || secondaryCtaLabel) && (
            <div
              style={{
                display: "inline-flex",
                gap: 12,
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              {ctaLabel && (
                <a
                  href={ctaHref}
                  style={{
                    padding: "12px 18px",
                    borderRadius: 12,
                    background: "#dc2626",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {ctaLabel}
                </a>
              )}

              {secondaryCtaLabel && (
                <a
                  href={secondaryCtaHref}
                  style={{
                    padding: "12px 18px",
                    borderRadius: 12,
                    border: "1px solid currentColor",
                    color: textColor,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {secondaryCtaLabel}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
