import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./style";
import { FaDollarSign, FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
    return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaPlusCircle} value={income} />
            <ResumeItem title="Saídas" Icon={FaMinusCircle} value={expense} />
            <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
        </C.Container>
    );
};

export default Resume;
