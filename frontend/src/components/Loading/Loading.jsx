import styles from "./Loading.module.css"

const Loading = () => {
  return (
    <div className="h-screen w-screen flex bg-[#fff] items-center justify-center fixed top-0">
        <div className={`${styles["loader"]} loader h-[50px] w-[50px] rounded-[50%]`}></div>
    </div>
  )
}

export default Loading
