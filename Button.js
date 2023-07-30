export default function Button({ children, block, white, outline, black, primary, size, ...props }) {
    let classes = "btn d-flex align-items-center text-decoration-none fw-500";
    
    classes += block ? " btn-block" : "";
    
    if (white && !outline) {
      classes += " btn-light text-dark";
    } else if (white && outline) {
      classes += " btn-outline-light";
    } else if (black && !outline) {
      classes += " btn-dark";
    } else if (black && outline) {
      classes += " btn-outline-dark";
    } else if (primary && !outline) {
      classes += " btn-primary";
    } else if (primary && outline) {
      classes += " btn-outline-primary";
    }
    
    classes += size === 'l' ? " btn-lg" : "";
    
    return (
      <button className={classes} {...props}>{children}</button>
    );
  }
  
