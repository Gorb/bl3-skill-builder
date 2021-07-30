import PropTypes from "prop-types";

export default function Icon({
  href,
  alt = "icon",
  ...otherProps
}) {

  if (href && href.length > 0) {
    return (
      <img 
        alt={alt}
        href={href}
        {...otherProps}
      />
    );
  }

  return <></>;
}

Icon.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string
};