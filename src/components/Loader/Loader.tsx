import { Rings } from "react-loader-spinner";


export const MyLoader: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '300px' }}>
    <Rings
      visible={true}
      height="150"
      width="150"
      color="#F4C550"
      ariaLabel="rings-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
</div>
  )

}