import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { findRandomPoemId } from "../api/poems";
import { Poem } from "./Poem";

export const LuckyPoemRedirect = () => {
    const navigate = useNavigate();

    useQuery(['random-poem'], findRandomPoemId, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            navigate(`/poems/${data._id}`);
        },
        onError: () => {
            navigate(`/`);
        }
    });

    return (
        <Poem/>
    );
};