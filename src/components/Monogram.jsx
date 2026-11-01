// "FA" brand mark used in the header, footer, loaders and chat
const Monogram = ({ className = "h-10 w-10 text-sm" }) => {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center bg-brand font-display font-bold tracking-wider text-charcoal ${className}`}
      aria-hidden="true"
    >
      FA
    </span>
  );
};

export default Monogram;
