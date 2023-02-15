const GlitchText = ({ children }) => {
    return (
        <div>
            <h1 className="glitch-anim">{children}</h1>
            <h1 className="glitch-anim">{children}</h1>
            <h1 className="glitch-anim">{children}</h1>
        </div>
    );
};

export default GlitchText;
