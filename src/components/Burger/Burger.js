import React from 'react';
import classes from '../Burger/Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = () => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}


export default Burger;