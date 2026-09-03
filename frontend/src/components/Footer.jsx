import PropTypes from "prop-types";


function Footer({ clearCompleted, activeTasks, children}) {
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasks} items left</span>

      {children}

      <button className="clear-completed" onClick={()=>{
         console.log("clear-completed btn was clicked");
         clearCompleted()
        
      }}>
       
        
        Clear completed
      </button>
    </footer>
  );
}
Footer.propTypes = {
  clearCompleted: PropTypes.func.isRequired,
   activeTasks: PropTypes.number,
    children: PropTypes.node,
}
Footer.defaultProps = {
  activeTasks: 0,
  children: null,
}
export default Footer;
