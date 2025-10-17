import styles from "./Button.module.css"

const Button = ({text}) => {
  return (
    <div className={`${styles["login-btns"]} text-center mb-5`}>
        <button
        type="submit"
        className="bg-[#5076db] text-[14px] transition-all duration-[0.3s] ease-in-out font-semibold rounded-[5px] border-[2px] border-solid border-transparent text-[#fff] py-[8px] px-auto my-[8px] cursor-pointer w-[90px] hover:bg-transparent hover:text-[#5076db] hover:border-[#5076db]"
        >
            {text}
        </button>
    </div>
  )
}

export default Button
