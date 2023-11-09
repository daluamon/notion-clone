
const RootLayout = ({
  children
} : {
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-scree">
      {children}
    </div>
   );
}
 
export default RootLayout;