"use client";

export const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_KEY || null;

const UmamiAnalytic = () => {
  return (
    <>
      { UMAMI_ID ? (
        <script defer src="https://cloud.umami.is/script.js" data-website-id={UMAMI_ID}></script>
      ) : (
        <></>
      )}
    </>
  );
};

export default UmamiAnalytic;