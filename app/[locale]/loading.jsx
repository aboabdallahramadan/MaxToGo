"use client";
import { ClipLoader } from "react-spinners"
const override = {
  display: 'block',
  margin: '100px auto',
};
const loading = () => {
  return (
        <ClipLoader
        color='secondary'
        loading={true}
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
    />
  )
}

export default loading