
const styles = {
  padding: '20px'
}

const MenuItem = ({ children }: any) => {
  return (
    <li style={styles}>
      {children}
    </li>
  );
};

export default MenuItem;
