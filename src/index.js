import './style.css'
import numeral from 'numeral'
import {getUsers} from './api/userApi'

getUsers()
  .then(result => {
    console.log(result); //eslint-disable-line no-console
  })

const courseValue = numeral(1000).format('$0,0.00')
console.log(`I would pay ${courseValue} for this course`) //eslint-disable-line no-console
