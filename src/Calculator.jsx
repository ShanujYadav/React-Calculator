import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

const Calculator=()=>{
    const [result,setResult]=useState('')
 const onClickHandler=(e)=>{
    setResult(result.concat(e.target.value))
 }

const onClear=()=>{
   setResult('');
}

const onCalculate=()=>{
    setResult(eval(result).toString())
}

return(<Container className="calsi">
    <Card sx={{ maxWidth: 305 }} >
      <input type="text" placeholder="0" className="input-box" value={result}/>
      <CardActions>
        <Button  variant="contained" onClick={onClickHandler} value="(">(</Button>
        <Button  variant="contained" onClick={onClickHandler} value=")" >)</Button>
        <Button  variant="contained" onClick={onClickHandler} value="%">%</Button>
        <Button  variant="contained" onClick={onClear} >AC</Button>
      </CardActions>
      <CardActions>
        <Button   variant="contained" onClick={onClickHandler} value="7">7</Button>
        <Button   variant="contained" onClick={onClickHandler} value="8">8</Button>
        <Button   variant="contained" onClick={onClickHandler} value="9">9</Button>
        <Button   variant="contained" onClick={onClickHandler} value="/">/</Button>
      </CardActions>
      <CardActions>
        <Button  variant="contained" onClick={onClickHandler}  value="4">4</Button>
        <Button  variant="contained" onClick={onClickHandler}  value="5">5</Button>
        <Button  variant="contained"  onClick={onClickHandler} value="6">6</Button>
        <Button  variant="contained"  onClick={onClickHandler} value="*">*</Button>
      </CardActions>
      <CardActions>
        <Button  variant="contained"  onClick={onClickHandler} value="1">1</Button>
        <Button  variant="contained" onClick={onClickHandler}  value="2">2</Button>
        <Button  variant="contained" onClick={onClickHandler}  value="3">3</Button>
        <Button  variant="contained" onClick={onClickHandler} value="-">-</Button>
      </CardActions>
      <CardActions>
        <Button  variant="contained" onClick={onClickHandler} value="0">0</Button>
        <Button  variant="contained" onClick={onClickHandler} value=".">.</Button>
        <Button  variant="contained" onClick={onCalculate} value="=">=</Button>
        <Button  variant="contained" onClick={onClickHandler} value="+">+</Button>
      </CardActions>
    </Card>
</Container>
)
}
export default Calculator;