import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function CrosswordGenerator() {
  const { register, errors, handleSubmit } = useForm();

  //const [size, setsize] = useState([{ size: '2x2' }, { size: '3x3' }, { size: '45x5' }, { size: '6x6' }, { size: '7x7' }, { size: '8x8' }]);
  const size = [
    { size: '2x2' },
    { size: '3x3' },
    { size: '5x5' },
    { size: '6x6' },
    { size: '7x7' },
    { size: '8x8' },
    { size: '9x9' },
    { size: '10x10' },
  ];
  const [sizeChoose, setsizeChoose] = useState('');
  const [ansAndQues, setansAndQues] = useState([
    {
      answer: '',
      question: '',
    },
  ]);

  //form Event
  const onSubmit = (data, e) => {
    e.target.reset();
    setansAndQues([...ansAndQues, data]);
    console.log(sizeChoose);

    console.log(ansAndQues);
    e.preventDefault();
  };
  const onChangeHandle = (e) => {
    setsizeChoose(e.target.value);
    //console.log(e.target.value);
  };

  return (
    <div className='contanier'>
      <h2>Answers and Questions</h2>

      <div className='row'>
        <div className='col-sm 6'>
          <h4>Questions</h4>
          <div className='mb-4'>
            <h5>Choose crossword size</h5>
          </div>

          <input
            type='text'
            name='question'
            className='form-control'
            placeholder='Question'
            // value={ansAndQues.question}
            // onChange={handleOnchange}
            ref={register({
              required: {
                value: true,
                message: 'Required',
              },
            })}
          />
          <span className='text-danger text-small d-block mb-2'>{errors?.question?.message}</span>
        </div>
        <div className='col-sm 6'>
          <h4>Answers</h4>
          <select className='form-control mb-2' name='size' value={size.size} onChange={onChangeHandle}>
            {size.map((s, index) => (
              <option key={index} value={s.size}>
                {s.size}
              </option>
            ))}
          </select>
          <input
            type='text'
            name='answer'
            className='form-control'
            placeholder='Answer'
            // value={ansAndQues.answer}
            ref={register({
              required: {
                value: true,
                message: 'Required',
              },
            })}
          />
          <span className='text-danger text-small d-block mb-2'>{errors?.answer?.message}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type='submit' className='btn btn-dark mt-2'>
          Send{' '}
        </button>
      </form>
    </div>
  );
}

export default CrosswordGenerator;
