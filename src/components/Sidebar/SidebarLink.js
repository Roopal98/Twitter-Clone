import Icons from "./Icons";
import "./SidebarLink.css";

const SidebarLink = ({ text, Icon }) => {
    // const SomeIcon = () =><span>{Icon}</span>
  return(
    <div className="link">
        <Icons icon = {Icon}/>
        <h2>{text}</h2>
    </div>
  );
}
export default SidebarLink;