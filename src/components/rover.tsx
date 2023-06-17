import React from 'react';
import styles from '../styles/rover.module.css';
interface Props {
    color: string;
    bgcolor: string;
    width: string;
    height: string;
    borderRadius: string;
    borderLeft: string;
    borderRight: string;
    borderBottom: string;
    borderTop: string;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
    onClick?: (name: string | undefined) => void;
}

export const Flag = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.flag}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const Stick = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.stick}
            onClick={() => onClick && onClick('Flag')} // does no matter what you pass to onClick there the parent value will be used!
        ></div>
    );
};

export const FirstRectangle = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.first_rectangle}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const Trapezoid = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.trapezoid}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const SecondRectangle = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.second_rectangle}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const ThirdRectangle = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.third_rectangle}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const RedStick = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.red_stick}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const OrangeRectangle = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.orange_rectangle}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const FirstTriangle = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.first_triangle}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const FourthRectangle = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.fourth_rectangle}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const SecondTriangleRectangle = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={styles.second_triangle}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const FirstCircle = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={`${styles.circle} ${styles.first_circle}`}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const SecondCircle = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={`${styles.circle} ${styles.second_circle}`}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};

export const ThirdCircle = (props: Props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                color: props.color,
                backgroundColor: props.bgcolor,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                borderLeft: props.borderLeft,
                borderRight: props.borderRight,
                borderBottom: props.borderBottom,
                borderTop: props.borderTop,
                borderBottomLeftRadius: props.borderBottomLeftRadius,
                borderBottomRightRadius: props.borderBottomRightRadius,
            }}
            className={`${styles.circle} ${styles.third_circle}`}
            onClick={() => onClick && onClick('')}
        ></div>
    );
};
