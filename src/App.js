import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { getDateFromHours, getHourRange, sumTime } from './helpers';
import { Field } from "./components";

import StopWatch from './images/stopwatch.png';
import './App.css';

const timeValidation = yup.string().required('Campo obrigatório').min(5, 'Digite o horário completo').matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g, 'Horário inválido');

const schema = yup.object().shape({
  st_in: timeValidation,
  st_out: timeValidation,
  nd_in: timeValidation,
  nd_out: timeValidation,
});

function App() {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const [totalTime, setTotalTime] = useState(null);

  const onSubmit = (data) => {
    const stIn = getDateFromHours(data.st_in);
    const stOut = getDateFromHours(data.st_out);
    const ndIn = getDateFromHours(data.nd_in);
    const ndOut = getDateFromHours(data.nd_out);

    const stDiff = getHourRange(stIn, stOut).formatedTime;
    const ndDiff = getHourRange(ndIn, ndOut).formatedTime;

    const totalDiff = sumTime(stDiff, ndDiff);

    setTotalTime(totalDiff);
  };

  return (
    <div className="app">
      <div className="container">
        <img src={StopWatch} alt="Relógio Ponto" />
        <h1 className="app-title">Calculadora Relógio Ponto</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="app-form">
          <Field label="1º Entrada" name="st_in" register={register} errors={errors} />
          <Field label="1º Saída" name="st_out" register={register} errors={errors} />

          <b>Intervalo</b>
          <hr color="#ced4da" size="1" />
          <br />

          <Field label="2º Entrada" name="nd_in" register={register} errors={errors} />
          <Field label="2º Saída" name="nd_out" register={register} errors={errors} />

          <input type="submit" value="Calcular" className="btn-submit" disabled={!formState.isValid} />
        </form>
        <h3>Total de horas trabalhadas: {totalTime ? totalTime : '00:00'}</h3>
      </div>
    </div>
  );
}

export default App;
