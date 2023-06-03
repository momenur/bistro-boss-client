import { Parallax } from 'react-parallax';
const Cover = ( {coverImg, coverTitle} ) => {
    return (
        <Parallax
        blur={{ min: -15, max: 20 }}
        bgImage={coverImg}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div className="h-[600px] hero p-36" >
            <div className="hero-overlay bg-opacity-60" ></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-semibold uppercase">{coverTitle}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in.</p>
                </div>
                {/* commit */}
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;