import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';


export default function RoutePage() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};