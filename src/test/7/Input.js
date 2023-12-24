import { useState } from 'react';
import style from './Input.module.css';
import Button from './Button';

const Input = (props) => {
	const [isValid, setIsVaild] = useState(true);
	const [enterValue, setEnterValue] = useState('');
	const inputHandler = (e) => {
		setEnterValue(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (enterValue.trim().length === 0) {
			setIsVaild(false);
		} else {
			setIsVaild(true);
		}
	};
	let message;
	if (!isValid) {
		message = <p className={style.message}>제목을 작성해주세요.</p>;
	}
	return (
		<form onSubmit={submitHandler} className={`${style.form_control} ${!isValid && style.invalid}`}>
			<label htmlFor="title">제목</label>
			<input type="text" name="title" id="title" onChange={inputHandler} />
			{message}

			<Button type="submit">전송</Button>
			<Button type="reset">취소</Button>
		</form>
	);
};
export default Input;
